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
        highest_bid: state.auction.highest_bid
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

const bids = []
let highest_bid = 0

const nowDate = moment();

class DetailProductListProduct extends Component {

    state = {
        bidData: 0,
        auction_id: this.props.auctionID,
        max_bid : 0,
        highest_bid: this.props.highest_bid
    }

    static get propTypes() {
        return {
            children: PropTypes.any,
            dispatch: PropTypes.any,
            bidData: PropTypes.array,
            highest_bid: PropTypes.number
        }
    }

    componentDidMount() {
        request
        .get(`/bids/auction_id/${this.props.params}`)
        .then(response => {
            
            bids.push(response.data.bidData)
            response.data.bidData.map((item,index) => {
                if (item.bids_nominal>=highest_bid) 
                {
                    highest_bid = item.bids_nominal
                }
                
                return ( 
                    highest_bid
                )
            })
                this.setState(() => {
                    return { 
                        bidData: response.data.bidData.length,
                        highest_bid: highest_bid
                    }
                })
                this.props.dispatch({
                    type: 'UPDATE_BID_AUCTION',
                    payload: {
                      highest_bid: this.state.highest_bid
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
                <ListGroupItem>Number of Bid : {this.state.bidData}</ListGroupItem>
                <ListGroupItem>
                    Highest Bidder : {this.props.highest_bid}
                </ListGroupItem>
                <ListGroupItem>
                    Opening Time : {this.props.openingTime}
                </ListGroupItem>
                <ListGroupItem>
                    Closing Time : {this.props.endTime}
                </ListGroupItem>
                <ListGroupItem>Current Time: {nowDate.format()} </ListGroupItem>
                <ListGroupItem>Auction ID : {this.props.auctionID}</ListGroupItem>
                <ListGroupItem>
                    Item Condition : {this.props.condition}
                </ListGroupItem>
                <ListGroupItem>Shipping Paid By</ListGroupItem>
                <hr />
            </ListGroup>
        )
    }
}

export default connect (mapStateToProps) (DetailProductListProduct)
 