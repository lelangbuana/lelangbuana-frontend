import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'

import { ListGroup, ListGroupItem } from 'reactstrap'

const mapStateToProps = state => {
    return {
        bidData: state.bidData
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

class DetailProductListProduct extends Component {
    state = {
        bidData: 0,
        auction_id: this.props.auctionID
    }

    static get propTypes() {
        return {
            children: PropTypes.any,
            dispatch: PropTypes.any,
            bidData: PropTypes.array
        }
    }

    componentDidMount() {
        
        console.log(this.props);
        
        request
        .get(`/bids/auction_id/${this.props.params}`)
        .then(response => {
            
                this.setState(() => {
                    return { bidData: response.data.bidData.length }
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { bidData } = this.state

        return (
            <ListGroup flush style={styles.text}>
                <ListGroupItem>Quantity : {this.props.quantity}</ListGroupItem>
                <ListGroupItem>
                    Opening Price : {this.props.openingPrice}
                </ListGroupItem>
                <ListGroupItem>Number of Bid : {this.state.bidData}</ListGroupItem>
                <ListGroupItem>
                    Highest Bidder : {this.props.max_bid}
                </ListGroupItem>
                <ListGroupItem>
                    Opening Time : {this.props.openingTime}
                </ListGroupItem>
                <ListGroupItem>
                    Closing Time : {this.props.endTime}
                </ListGroupItem>
                <ListGroupItem>Current Time</ListGroupItem>
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
