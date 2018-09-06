import React, {Component} from 'react'
import axios from 'axios'

import MainItem from './MainItem'

const request = axios.create({
    baseURL: 'https://lelangbuana.herokuapp.com' || 'http://localhost:3000',
    timeout: 10000,
    headers: { Authorization: '' }
})

let myBids = []
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
            already_request: false

        }
    }

    componentDidMount(){
        // if (this.state.already_request){
        //     return false
        // }
        //return false
        // this.state.already_request = true
        
        request
            .get(`/auctions/user_id/${localStorage.getItem('user_id')}`)
            .then((response) => response.data)
            .then(data => {
                this.setState({
                    myAuctions: data,
                    already_request: true
                })
                // data.forEach(item => {

                // request
                //     .get(`/bids/auction_id/${item.auction_id}`)
                //     .then(response => { 
                            
                //         const data = response.data.forEach(item => {
                //             const { bids_nominal, username } = item
                //             return {
                //                 bids_nominal,
                //                 username
                //             }
                //         })

                //         this.setState({
                //             myBids: data
                //         })                            
                //     })
                //     .catch(error=> {error})
                        
                // this.setState(prevState => {
                //     return {
                //         myAuctions: prevState.myAuctions.concat({
                //             title: item.title,
                //             max_bid: item.max_bid,
                //             min_bid: item.min_bid,
                //             item_photo: item.item_photo,
                //             end_date : item.end_date,
                //             bidData: this.state
                //         })
                //     }
                // })
                // })
                //console.log('AUCTIONS DATA: ', this.state.myAuctions)
            })
            .catch(error=>{console.log(error)})        
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     if (this.state.already_request){
    //         console.log('helo')
    //         return false
    //     }
    //     console.log('helo')
    //     return true
    // }
    

    createAuctions(data, index) {
        return <MainItem key={index} 
            title={data.title}
            max_bid={data.max_bid}
            min_bid={data.min_bid}
            item_photo={data.item_photo}
            end_date = {data.end_date}
            auction_id = { data.auction_id}
        />
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