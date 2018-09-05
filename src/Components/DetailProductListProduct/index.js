import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'
import moment from 'moment'

import { ListGroup, ListGroupItem } from 'reactstrap'

const mapStateToProps = (state,props) => {
    return {
        bidData: state.auction.bidData,
        max_bid: state.auction.max_bid,
        highest_bid: state.auction.highest_bid,
        bids: state.auction.bids
    }
}

const styles = {
    text: {
        fontSize: '14px',
        textAlign: 'left'
    }
}

const request = axios.create({
    baseURL: 'https://lelangbuana.herokuapp.com' || 'http://localhost:3000',
    timeout: 10000,
    headers: { Authorization: '' }
})

<<<<<<< HEAD
const currentTime = moment()
=======

let highest_bid = 0

const nowDate = moment().format('ll');
>>>>>>> 293a2cb65f7f25b479796ce6fd5afde8b942496e

let highest_bid = 0

const nowDate = moment().format('ll');

class DetailProductListProduct extends Component {

    state = {
        bidData: 0,
        auction_id: this.props.auctionID,
        max_bid : 0,
        highest_bid: this.props.highest_bid
    }

    static get propTypes(){
        return {
            children: PropTypes.any,
            dispatch: PropTypes.any,
            bidData: PropTypes.array,
            highest_bid: PropTypes.number
        }
    }

    componentDidMount() {
        // request
        // .get(`/bids/auction_id/${this.props.params}`)
        // .then(response => {
        //     bids.push(response.data.bidData)
            
        //     response.data.map((item,index) => {
        //         console.log("BID DATA: ", item);
        //         if (item.bids_nominal>=highest_bid) 
        //         {
        //             highest_bid = item.bids_nominal
        //         }
                
        //         return ( 
        //             highest_bid
        //         )
        //     })
        //         this.setState(() => {
        //             return { 
        //                 bidData: response.data.length,
        //                 highest_bid: highest_bid
        //             }
        //         })
        //         this.props.dispatch({
        //             type: 'UPDATE_BID_AUCTION',
        //             payload: {
        //               highest_bid: this.state.highest_bid
        //             }
        //           })
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
            
        request
        .get(`/auctions/${this.props.params}`)
        .then(response => {
            this.props.dispatch({
                type: 'SET_REMAINING_TIME',
                payload: {
                    start_date: response.data.start_date,
                    end_date: response.data.end_date
                }
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <ListGroup flush style={styles.text}>
                <ListGroupItem>Quantity : {this.props.quantity}</ListGroupItem>
                <ListGroupItem>
                    Opening Price : {this.props.openingPrice}
                </ListGroupItem>
                <ListGroupItem>Number of Bid : {this.props.bids}</ListGroupItem>
                <ListGroupItem>
                    Highest Bidder : {this.props.highest_bid}
                </ListGroupItem>
                <ListGroupItem>
                    Opening Time : {this.props.openingTime}
                </ListGroupItem>
                <ListGroupItem>
                    Closing Time : {this.props.endTime}
                </ListGroupItem>
                <ListGroupItem>Current Time: {nowDate} </ListGroupItem>
                <ListGroupItem>Auction ID : {this.props.auctionID}</ListGroupItem>
                <ListGroupItem>
                    Item Condition : {this.props.condition}
                </ListGroupItem>
                <ListGroupItem>Shipping Paid By : Customer</ListGroupItem>
                <hr />
            </ListGroup>
        )
    }
}

export default connect (mapStateToProps) (DetailProductListProduct)
 