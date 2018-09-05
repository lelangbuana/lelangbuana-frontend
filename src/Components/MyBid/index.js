import React, {Component} from 'react'
import { Table } from 'reactstrap'
import axios from 'axios'

const request = axios.create({
    baseURL: 'https://lelangbuana.herokuapp.com' || 'http://localhost:3000',
    timeout: 10000,
    headers: { Authorization: '' }
})

class MyBid extends Component {
    constructor(props) {
        super(props)
        this.createBidsHistories = this.createBidsHistories.bind(this)
        this.state = {
            myBids: [],
            title: ''
        }
    }

    componentDidMount(){
        request
            .get(`/bids/user_id/${localStorage.getItem('user_id')}`)
            .then((response) => { return response.data.bidData })
            .then(data => {
                data.forEach(item => {
                    request
                        .get(`/auctions/${item.auction_id}`)
                        .then((response) => { 
                            console.log('RESPONSE : ', response)
                            return response.data 
                        })
                        .then(data => {
                            request
                                .get(`/users/id/${data.user_id}`)
                                .then((response) => {return response.data.user.username})
                                .then(username => {
                                    this.setState(prevState => {
                                        console.log(prevState.myBids)
                
                                        return {
                                            myBids: prevState.myBids.concat({
                                                bids_nominal: item.bids_nominal,
                                                created_at: item.created_at,
                                                auction_id: item.auction_id,
                                                user_id: item.user_id,
                                                title: data.title,
                                                username: username
                                            })
                                        }
                                    })
                                })
                                
                            
                            console.log('LOG FROM AUCTION: ', this.state.title)
                        })
                        .catch(error=>{console.log(error)})

                    
                })
            })
            .catch(error=>{console.log(error)})
    }

    createBidsHistories(item, index) {
        return (
            <tbody key={index}>
                <tr>
                    <td>{item.created_at}</td>
                    <td>{item.created_at}</td>
                    <td>{item.title}</td>
                    <td>{item.username}</td>
                    <td>{item.bids_nominal}</td>
                    <td>Success</td>
                </tr>
            </tbody>
        )
    }

    render() {
        console.log('My Bids : ', this.state.myBids)
        let listBidHistories = this.state.myBids.map(this.createBidsHistories)
        return (
            <div>
                <Table hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Items</th>
                            <th>Seller</th>
                            <th>My Bid</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {listBidHistories}
                </Table>
            </div>
        )
    }
}

export default MyBid