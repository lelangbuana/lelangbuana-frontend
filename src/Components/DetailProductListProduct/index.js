import React, {Component} from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

const styles = {
    text : {
        fontSize : '14px',
        textAlign : 'left'
    }
}

class DetailProductListProduct extends Component {
    render() {
        return (
            <ListGroup flush style={styles.text}>
                <ListGroupItem >Quantity : {this.props.quantity}</ListGroupItem>
                <ListGroupItem >Opening Price : {this.props.openingPrice}</ListGroupItem>
                <ListGroupItem >Number of Bid</ListGroupItem>
                <ListGroupItem >Highest Bidder : {this.props.max_bid}</ListGroupItem>
                <ListGroupItem >Opening Time : {this.props.openingTime}</ListGroupItem>
                <ListGroupItem >Closing Time : {this.props.endTime}</ListGroupItem>
                <ListGroupItem >Current Time</ListGroupItem>
                <ListGroupItem >Auction ID</ListGroupItem>
                <ListGroupItem >Item Condition : {this.props.condition}</ListGroupItem>
                <ListGroupItem >Shipping Paid By</ListGroupItem>
                <hr/>
            </ListGroup>
        )
    }
}

export default DetailProductListProduct