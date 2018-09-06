import React, {Component} from 'react'
import axios from 'axios'

import MainItem from './MainItem'
import moment from 'moment'
const request = axios.create({
    baseURL: 'https://lelangbuana.herokuapp.com' || 'http://localhost:3000',
    timeout: 10000,
    headers: { Authorization: '' }
})

// let myBids = []
class MyAuction extends Component {
    
    constructor(props) {
        super(props)
        // this.toggle = this.toggle.bind(this)
        this.createAuctions = this.createAuctions.bind(this)
        // this.state = { collapse: false }
        this.state = {
            max_bid: 0,
            min_bid: 0,
            highest_bid: 0,
            myAuctions: [],
            myBids:[],
            username: '',
            end_date:'',
            start_date:'',
            already_request: false

        }
    }

    UNSAFE_componentWillMount(){
               
        request
            .get(`/auctions/user_id/${localStorage.getItem('user_id')}`)
            .then((response) => {
                console.log('AUCTION DATA FORM USER ID : ',response.data)
                return response.data
            })
            .then(data => {
                this.setState({
                    myAuctions: data,
                    already_request: true
                })
                console.log('DATA : ',this.state.myAuctions)
            })
            .catch(error=>{console.log(error)})        
    }


    createAuctions(data, index) {
        console.log('DATA : ', data.bids)
        return (
            <MainItem key={index} 
                title={data.title}
                bids={data.bids}
                maxBid={data.max_bid}
                minBid={data.min_bid}
                itemPhoto={data.item_photo}
                endDate = {data.end_date}
                auctionId = { data.auction_id}
            />)
    }

    render() {
        console.log('AUCTIONS DATA: ', this.state.myAuctions)
        let auctions = this.state.myAuctions.map(this.createAuctions)
        // let bids = this.state.myBids.map(this.createBids)
        return (
            <div>
                {auctions}
                {/* {bids} */}
            </div>
        )
    }
}

export default MyAuction