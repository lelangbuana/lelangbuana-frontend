import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

const request = axios.create({
    baseURL: 'https://lelangbuana.herokuapp.com' || 'http://localhost:3000',
    timeout: 10000,
    headers: { Authorization: '' }
})

const bids = []
let highest_bid = 0
let winner

class Timer extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = { seconds: 0}
    }

    getWinner(){
        console.log('CLOSED!!!')
    }
  
    tick() {

        // if (this.props.status === 'ongoing')
        
        request
            .get(`/bids/auction_id/${this.props.params}`)
            .then(response => {
                
                
                response.data.map((item,index) => {
                    if (item.bids_nominal>highest_bid) 
                    {
                            
                        winner = item.user.username
                        highest_bid = item.bids_nominal
                        bids.push(response.data)
                        return ( 
                            highest_bid,
                            bids,
                            winner
                        )
                    }
                    return ( 
                        highest_bid,
                        bids,
                        winner
                    )
                    
                })
                this.setState(() => {
                    return { 
                        bidData: response.data.length,
                        highest_bid: highest_bid,
                        winner: winner
                    }
                })
                this.props.dispatch({
                    type: 'UPDATE_BID_AUCTION',
                    payload: {
                        highest_bid: this.state.highest_bid,
                    }
                })
                this.props.dispatch({
                    type: 'GET_WINNER',
                    payload: {
                        winner: this.state.winner
                    }
                })
                console.log('WINNER: ', this.state.winner)
                    
                this.props.dispatch({
                    type: 'UPDATE_BID_AMOUNT',
                    payload: {
                        bids: bids.length
                    }
                })
            })
            .catch(error => {
                // console.log(error)
            })
        

        
        this.setState(prevState => ({
            seconds: prevState.seconds + 1
        }))
        
        
    }
  
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000)
    }
  
    componentWillUnmount() {
        clearInterval(this.interval)
    }
  
    render() {
        return (
            <div>
                {/* Seconds: {this.state.seconds} */}
            </div>
        )
    }
}
const mapStateToProps = (state,props) => {
    return {
        bid_id: state.bidData.bid_id,
        bids_nominal: state.bidData.bids_nominal,
        auction_id: state.auction.auction_id,
        user_id: state.user.user_id,
        max_bid: state.auction.max_bid,
        start_bid: state.auction.start_bid,
        highest_bid: state.auction.highest_bid,
        login: state.user.login,
        username: state.user.login.username,
        start_date: state.auction.start_date,
        end_date: state.auction.end_date,
        bids_multiply: state.auction.bids_multiply
    }
}
export default connect(mapStateToProps)(Timer)