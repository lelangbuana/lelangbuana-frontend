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
                <hr/>
            </ListGroup>
        )
    }
}

export default DetailProductListProduct