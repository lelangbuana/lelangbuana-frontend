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
        bids: state.auction.bids,
        winner: state.auction.winner
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
                <ListGroupItem><b>Quantity :</b> {this.props.quantity}</ListGroupItem>
                <ListGroupItem>
                    <b>Opening Price :</b> <NumberFormat value={this.props.openingPrice} displayType={'text'} thousandSeparator={true} prefix={'IDR '} />
                </ListGroupItem>
                <ListGroupItem><b>Number of Bid</b> : {this.props.bids}</ListGroupItem>
                <ListGroupItem>
                    <b>Highest Bidder :</b> <NumberFormat value={this.props.highest_bid} displayType={'text'} thousandSeparator={true} prefix={'IDR '} />
                    <div>
                    <h3>{this.props.winner}</h3>
                    </div>
                </ListGroupItem>
                <ListGroupItem>
                    <b>Opening Time :</b> {moment(this.props.openingTime).format('lll')}
                </ListGroupItem>
                <ListGroupItem>
                    <b>Closing Time :</b> {moment(this.props.endTime).format('lll')}
                </ListGroupItem>
                <ListGroupItem><b>Current Time:</b> {nowDate} </ListGroupItem>
                <ListGroupItem><b>Auction ID :</b> {this.props.auctionID}</ListGroupItem>
                <ListGroupItem>
                    <b>Item Condition :</b> {this.props.condition}
                </ListGroupItem>
                <ListGroupItem><b>Shipping Paid By : Customer</b></ListGroupItem>
                <hr />
            </ListGroup>
        )
    }
}

export default connect (mapStateToProps) (DetailProductListProduct)
 