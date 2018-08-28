import React from 'react'

import { ListGroup, ListGroupItem } from 'reactstrap'

export default class DetailProductListProduct extends React.Component {
    render() {
        return (
            <ListGroup flush>
                <ListGroupItem >Quantity </ListGroupItem>
                <ListGroupItem >Opening Price</ListGroupItem>
                <ListGroupItem >Number of Bid</ListGroupItem>
                <ListGroupItem >Highest Bidder</ListGroupItem>
                <ListGroupItem >Opening Time</ListGroupItem>
                <ListGroupItem >Closing Time</ListGroupItem>
                <ListGroupItem >Current Time</ListGroupItem>
                <ListGroupItem >Auction ID</ListGroupItem>
                <ListGroupItem >Item Condition</ListGroupItem>
                <ListGroupItem >Shipping Paid By</ListGroupItem>
            </ListGroup>
        )
    }
}