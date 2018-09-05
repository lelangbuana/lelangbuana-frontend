import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import CardAuction from '../Components/CardAuction'
import Categories from '../Components/Categories'
import Profile from '../Components/Profile'

import { Container, Row, Col } from 'reactstrap'

const styles = {
    space: {
        marginTop: '2rem',
        marginBottom: '5rem'
    }
}

const request = axios.create({
    baseURL: 'https://lelangbuana.herokuapp.com' || 'http://localhost:3000',
    timeout: 10000,
    headers: { Authorization: '' }
})

const mapStateToProps = state => {
    return {
        user: state.user,
        title: state.title,
        src: state.src,
        description: state.description
    }
}

const categories = [
    { name: 'Computers', categories: ['Laptop', 'PC', 'Netbook'] },
    {
        name: 'Electronic, AV & Camera',
        categories: ['DSLR', 'Mirrorless', 'Webcam']
    },
    { name: 'Music', categories: ['Music Player', 'Speaker'] },
    { name: 'Book & Magazine', categories: ['Science-Fiction', 'Non-Fiction'] }
]

class Home extends Component {

    state = {
        // bidData: 0,
        // auction_id: this.props.auctionID,
        // max_bid : 0,
        highest_bid: this.props.highest_bid
    }

    addItem(item) {
        this.setState(prevState => {
            return {
                auctions: prevState.items.concat(item)
            }
        })
    }

    componentDidMount() {
        request
            .get('/auctions')
            .then(response => {
                return response.data
            })
            .then(data => {
                data.forEach(item => {

                    console.log("AUCTION_ID : ", item.auction_id);
                    
                    request
                    .get(`/bids/auction_id/${item.auction_id}`)
                    .then(response => {
                        // const bids = []
                        // bids.push(response.data.bidData)
                        response.data.bidData.map((item,index) => {
                            if (item.bids_nominal>=this.state.highest_bid) 
                            {
                                this.state.highest_bid = item.bids_nominal
                            }
                            
                            return ( 
                                this.state.highest_bid
                            )
                        })
                        console.log("HIGHEST BID : ", this.state.highest_bid);
                        
                            // this.setState(() => {
                            //     return { 
                            //         bidData: response.data.bidData.length,
                            //         highest_bid: highest_bid
                            //     }
                            // })
                            // this.props.dispatch({
                            //     type: 'UPDATE_BID_AUCTION',
                            //     payload: {
                            //       highest_bid: this.state.highest_bid
                            //     }
                            //   })
                        })
                        .catch(error => {
                            console.log(error)
                        })

                    
                    this.setState(prevState => {
                        return {
                            auctions: prevState.auctions.concat({
                                user: item.auction_id,
                                title: item.title,
                                src: item.item_photo,
                                description: item.item_description,
                                status: item.status
                            })
                        }
                    })
                })
                
            })
            .catch(error => {
                console.log(error)
            })

        
    }
    constructor(props) {
        super(props)
        this.createCategories = this.createCategories.bind(this)
        this.state = {
            auctions: []
        }
    }
    static get propTypes() {
        return {
            children: PropTypes.any,
            dispatch: PropTypes.any,
            key: PropTypes.string,
            title: PropTypes.string,
            src: PropTypes.string,
            description: PropTypes.string
        }
    }

    state = {
        title: this.props.title,
        src: this.props.src,
        description: this.props.description
    }

    createCategories(item, index) {
        return (
            <Categories
                key={item.name + index}
                name={item.name}
                categories={item.categories}
            />
        )
    }

    render() {
        let listAuction = this.state.auctions.map((item, index) => {

                return (
                    <Link
                        key={index}
                        to={`/auctions/${item.user}`}
                        params={{ id: item.user }}
                        status={item.status}
                    >
                        <CardAuction
                            key={item.title + index}
                            user={item.user}
                            title={item.title}
                            src={item.src}
                            description={item.description}
                            status={item.status}
                        />
                    </Link>
                )
            
        })

        let listCategories = categories.map(this.createCategories)

        let profiles
        if (localStorage.getItem('token')){
            profiles = <div>
            <Profile/>
            <br/>
            </div>
        }
        else {
            profiles = <div></div>
        }
        return (
            <div style={styles.space}>
                <Container fluid>
                    <Row>
                        <Col sm="3">
                            {profiles}
                            {listCategories}       
                        </Col>
                        <Col sm="9">
                            <Row>{listAuction}</Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default connect(mapStateToProps)(withRouter(Home))
