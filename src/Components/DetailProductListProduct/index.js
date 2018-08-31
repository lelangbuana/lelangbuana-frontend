import React, {Component} from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import axios from 'axios'
const styles = {
    text : {
        fontSize : '14px',
        textAlign : 'left'
    }
}

const request = axios.create({
    baseURL: 'https://lelangbuana.herokuapp.com' || 'http://localhost:3000',
    timeout: 10000,
    headers: { Authorization: '' }
})

class DetailProductListProduct extends Component {
    componentDidMount(){
        request
            .get('/bids')
            .then((response) => {
                // console.log(response),
                
                this.setState(() => {
                    return {bids: response.data.bids.length}
                    
                })
                
                // console.log(this.state.auction.title)
                
            })
            .catch(error=>{console.log(error)})
    }

    

    handleClick(){  
        request
            .get('/bids')
            .then((response) => {
                console.log(response)
                
                // this.setState((prevState) => {
                //     return { 
                //         auction_id: response.data.auction_id,
                //         title: response.data.title,
                //         item_condition: response.data.item_condition,
                //         item_description: response.data.item_description,
                //         quantity: response.data.quantity,
                //         start_bid: response.data.start_bid,
                //         max_bid: response.data.max_bid,
                //         min_bid: response.data.min_bid,
                //         bids_multiply: response.data.bids_multiply,
                //         start_date: response.data.start_date,
                //         end_date: response.data.end_date,
                //         item_photo: response.data.item_photo,
                //         status: response.data.status,
                //         user_id: response.data.user_id,
                //         username: response.data.username
                        
                //     }
                //     // console.log(response.data)
                // })
                
                // console.log(this.state.auction.title)
                
            })
            .catch(error=>{console.log(error)})
    }
    render() {
        let bids = this.state
        console.log(bids)
        return (
            <ListGroup flush style={styles.text}>
                <ListGroupItem >Quantity : {this.props.quantity}</ListGroupItem>
                <ListGroupItem >Opening Price : {this.props.openingPrice}</ListGroupItem>
                <ListGroupItem >Number of Bid : {bids}</ListGroupItem>
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