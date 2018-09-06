import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'
import Timer from '../Components/Timer'

import { Container, Row, Col, Label } from 'reactstrap'

// import Categories from '../Components/Categories'
import ProductImage from '../Components/DetailProductCarousel'
import DetailProductListProduct from '../Components/DetailProductListProduct'
import DetailProductBidStatus from '../Components/DetailProductBidStatus'
import DetailProductDetailPages from '../Components/DetailProductDetailPages'
import Profile from '../Components/Profile'

const request = axios.create({
    baseURL: 'https://lelangbuana.herokuapp.com' || 'http://localhost:3000',
    timeout: 10000,
    headers: { Authorization: '' }
})

const styles = {
    space: {
        marginTop: '2rem',
        marginBottom: '5rem'
    },

    label: {
        fontSize: '25px',
        fontWeight: 'bold'
    },

    tabs: {
        marginTop: '1rem'
    }
}

// const categories = [
//     { name: 'Computers', categories: ['Laptop', 'PC', 'Netbook'] },
//     {
//         name: 'Electronic, AV & Camera',
//         categories: ['DSLR', 'Mirrorless', 'Webcam']
//     },
//     { name: 'Music', categories: ['Music Player', 'Speaker'] },
//     { name: 'Book & Magazine', categories: ['Science-Fiction', 'Non-Fiction'] }
// ]

const mapStateToProps = state => {
    return {
        auction_id: state.auction.auction_id,
        title: state.auction.title,
        item_condition: state.auction.item_condition,
        item_description: state.auction.item_description,
        quantity: state.auction.quantity,
        start_bid: state.auction.min_bid,
        max_bid: state.auction.max_bid,
        min_bid: state.auction.min_bid,
        bids_multiply: state.auction.bids_multiply,
        start_date: state.auction.start_date,
        end_date: state.auction.end_date,
        item_photo: state.auction.item_photo,
        status: state.auction.status,
        created_at: state.auction.created_at,
        user_id: state.auction.user_id,
        username: state.user.username,
        highest_bid: state.auction.highest_bid
    }
}

class ItemDetail extends Component {
    componentDidMount() {
        request
            .get(`/auctions/${this.props.match.params.id}`)
            .then(response => {
                this.setState(prevState => {
                    return {
                        auction_id: response.data.auction_id,
                        title: response.data.title,
                        item_condition: response.data.item_condition,
                        item_description: response.data.item_description,
                        quantity: response.data.quantity,
                        start_bid: response.data.min_bid,
                        max_bid: response.data.max_bid,
                        min_bid: response.data.min_bid,
                        bids_multiply: response.data.bids_multiply,
                        start_date: response.data.start_date,
                        end_date: response.data.end_date,
                        item_photo: response.data.item_photo,
                        status: response.data.status,
                        user_id: response.data.user.user_id,
                        username: response.data.user.username
                    }
                })
                  this.props.dispatch({
                    type: 'SET_AUCTION_STATE',
                    payload: {
                    address: response.data.user.address,
                    phone_number: response.data.user.phone_number,
                    auction_id: response.data.auction_id,
                    title: response.data.title,
                    item_condition: response.data.item_condition,
                    item_description : response.data.item_description,
                    quantity: response.data.quantity,
                    start_bid: response.data.start_bid,
                    max_bid: this.state.max_bid,
                    min_bid: response.data.min_bid,
                    bids_multiply: response.data.bids_multiply,
                    start_date: response.data.start_date,
                    end_date: response.data.end_date,
                    item_photo: response.data.item_photo,
                    status: response.data.status,
                    user_id: response.data.user.user_id,
                    username: response.data.user.username

                        }
                     })
                     console.log("STATUS FROM ITEM DETAIL : ", response.data.status);
                    })
                
            .catch(error => {
                console.log(error)
            })
            
            
    }

    static get propTypes() {
        return {
            children: PropTypes.any,
            dispatch: PropTypes.any,
            title: PropTypes.string,
            item_condition: PropTypes.string,
            item_description: PropTypes.string,
            quantity: PropTypes.number,
            start_bid: PropTypes.number,
            max_bid: PropTypes.number,
            min_bid: PropTypes.number,
            bids_multiply: PropTypes.number,
            start_date: PropTypes.string,
            end_date: PropTypes.string,
            item_photo: PropTypes.string,
            status: PropTypes.string,
            user_id: PropTypes.number,
            username: PropTypes.string,
            auction_id : PropTypes.number
        }
    }
    state = {
        auction_id: this.props.auction_id,
        title: this.props.title,
        src: this.props.src,
        description: this.props.description,
        max_bid: this.props.max_bid,
        highestBid: this.props.highest_bid
    }

    // createCategories(item, index) {
    //     return (
    //         <Categories
    //             key={item.name + index}
    //             name={item.name}
    //             categories={item.categories}
    //         />
    //     )
    // }
    render() {
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
                            {/* {listCategories} */}
                        </Col>

                        <Col sm="9">
                            <Label style={styles.label}>
                                {this.state.title}
                            </Label>

                            <Row>
                                <Col xs="12" sm="4">
                                    <ProductImage src={this.state.item_photo} />
                                </Col>
                                <Col xs="6" sm="4">
                                    <DetailProductListProduct
                                        quantity={this.state.quantity}
                                        openingPrice={this.state.start_bid}
                                        maxBid={this.state.max_bid}
                                        openingTime={this.state.start_date}
                                        endTime={this.state.end_date}
                                        condition={this.state.item_condition}
                                        auctionID={this.state.auction_id}
                                        params={this.props.match.params.id}
                                    />
                                </Col>
                                <Col xs="6" sm="4">
                                    <DetailProductBidStatus
                                        openingPrice={this.state.min_bid}
                                        buyOutPrice={this.state.max_bid}
                                        seller={this.state.username}
                                        highestBid={this.state.highestBid}
                                        params={this.props.match.params.id}
                                        status={this.props.status}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={styles.tabs}>
                            <DetailProductDetailPages params={this.props.match.params.id}/>
                            <Timer params={this.props.match.params.id} status={this.props.status}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default connect(mapStateToProps)(ItemDetail)
