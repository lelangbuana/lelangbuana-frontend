import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import { Container, Row, Col, Button } from 'reactstrap'

import CardAuction from '../Components/CardAuction'
// import Categories from '../Components/Categories'
import Profile from '../Components/Profile'
import Search from '../Components/Search'

const styles = {
    space: {
        marginTop: '2rem',
        marginBottom: '5rem'
    }
}

const request = axios.create({
    baseURL: 'https://lelangbuana.herokuapp.com' || 'http://localhost:3000',
    timeout: 50000,
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

// const categories = [
//     { name: 'Fashion', categories: ['Clothes', 'Watches', 'Bags', 'Accessories', 'Others'] },
//     { name: 'Furniture, AV & Camera', categories: ['Tables', 'Chairs', 'Cupboards', 'Kitchen Equipments', 'Others'] },
//     { name: 'Sport', categories: ['Bikes', 'Accessories', 'Rackets', 'Balls', 'Shoes', 'Jerseys', 'Others'] },
//     { name: 'Electronic', categories: ['Handphones & Tablets', 'Cameras & Photography', 'PC & Laptops', 'TV & Monitors', 'Others'] },
//     { name: 'Vehicle', categories: ['Cars', 'Motorcycles', 'Spareparts', 'Wheels', 'Accessories']},
//     { name: 'Collection & Hobby', categories: ['Gem Stone', 'Antiques', 'Musical Instruments', 'Dolls and Toys', 'Tapes, Books & Magazines', 'Handicrafts', 'Artworks', 'Old Money', 'Others']}
// ]

class Home extends Component {

    addItem(item) {
        this.setState(prevState => {
            return {
                auctions: prevState.items.concat(item)
            }
        })
    }

    UNSAFE_componentWillMount() {
        request
            .get('/auctions')
            .then(response => {
                return response.data
            })
            .then(data => {
                data.forEach(item => {


                    // console.log('AUCTION_ID : ', item)
  

                    this.setState(prevState => {
                        return {
                            auctions: prevState.auctions.concat({
                                user: item.auction_id,
                                title: item.title,
                                item_photo: item.item_photo,
                                description: item.item_description,
                                status: item.status,
                                start_bid: item.start_bid,
                                max_bid: item.max_bid,
                                start_date: item.start_date,
                                end_date: item.end_date
                            })  
                        }
                    })
                })
                
            })
            .catch(error => {
                console.log(error)
            })

        // request
        //     .get('/categories')
        //     .then(response => {
        //         console.log('Categories : ', response.data)
        //         return response.data
        //     })

    }

    componentDidMount() {}
    constructor(props) {
        super(props)
        // this.createCategories = this.createCategories.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            auctions: [],
            title: this.props.title,
            src: this.props.item_photo,
            description: this.props.description,
            highest_bid: this.props.highest_bid,
            start_bid: 0,
            max_bid: 0,
            start_date: 0,
            end_date: 0,
            statusValue: false,
            buttonText : 'On Going Auction'
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

    // createCategories(item, index) {
    //     return (
    //         <Categories
    //             key={item.name + index}
    //             name={item.name}
    //             // categories={item.categories}
    //         />
    //     )
    // }

    handleClick(){
        this.setState({ 
            statusValue: !this.state.statusValue
        })
        if (this.state.statusValue){
            this.setState({ 
                buttonText: 'Finished Auction'
            })
        }
        else {
            this.setState({ 
                buttonText: 'On Going Auction'
            })
        }
    }

    

    render() {
        let listAuction
        if (this.state.statusValue) {
            listAuction = this.state.auctions.map((item, index) => {
                if (item.status === 'ongoing') {
                    return <div key={index}></div>
                }
                return (
                    <Col xs="12" sm="6" md="4" key={index}>

                        <Link
                            key={index}
                            to={`/auctions/${item.user}`}
                            params={{ id: item.user }}
                        >
                            <CardAuction
                                status={item.status}
                                startBid={item.start_bid}
                                maxBid={item.max_bid}
                                startDate={item.start_date}
                                endDate={item.end_date}
                                src={item.item_photo}
                                title={item.title}
                            />
                        </Link>
                    </Col>
                )
            })
        }
        else {
            listAuction = this.state.auctions.map((item, index) => {
                if (item.status === 'success') {
                    return <div key={index}></div>
                }
                return (
                    <Col xs="12" sm="6" md="4" key={index}>

                        <Link
                            key={index}
                            to={`/auctions/${item.user}`}
                            params={{ id: item.user }}
                        >
                
                            <CardAuction

                                status={item.status}
                                startBid={item.start_bid}
                                maxBid={item.max_bid}
                                startDate={item.start_date}
                                endDate={item.end_date}
                                src={item.item_photo}
                                title={item.title}

                            />
                        </Link>
                    </Col>
                )


            })
        }

        // let listCategories = categories.map(this.createCategories)
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
                            <Button color="primary" onClick={this.handleClick}value="success" block>{this.state.buttonText}</Button>
                            {/* {listCategories}*/}
                            <br/>

                            <Search updateList = {this.updateList}/>
                        </Col>
                        <Col sm="9">
                            <Row className="justify-context-center row-eq-height">

                                {listAuction}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

    updateList = (data) => {
        this.setState({
            auctions: data
        })
        console.log(data)
    }
}

export default connect(mapStateToProps)(withRouter(Home))
