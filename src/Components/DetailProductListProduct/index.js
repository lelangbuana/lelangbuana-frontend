import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'
import moment from 'moment'
import NumberFormat from 'react-number-format';

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

// const currentTime = moment()

// let highest_bid = 0

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
                    Opening Price : <NumberFormat value={this.props.openingPrice} displayType={'text'} thousandSeparator={true} prefix={'IDR. '} />
                </ListGroupItem>
                <ListGroupItem>Number of Bid : {this.props.bids}</ListGroupItem>
                <ListGroupItem>
                    Highest Bidder : <NumberFormat value={this.props.highest_bid} displayType={'text'} thousandSeparator={true} prefix={'IDR. '} />
                </ListGroupItem>
                <ListGroupItem>
                    Opening Time : {moment(this.props.openingTime).format('lll')}
                </ListGroupItem>
                <ListGroupItem>
                    Closing Time : {moment(this.props.endTime).format('lll')}
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
 