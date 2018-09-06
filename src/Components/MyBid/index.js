import React, {Component} from 'react'
import { Table, Card, CardBody, CardText, CardImg } from 'reactstrap'
import axios from 'axios'
import moment from 'moment'
import NumberFormat from 'react-number-format'

const request = axios.create({
    baseURL: 'https://lelangbuana.herokuapp.com' || 'http://localhost:3000',
    timeout: 10000,
    headers: { Authorization: '' }
})

const styles = {
    cards : {
        marginBottom : '1rem'
    }
}

class MyBid extends Component {
    constructor(props) {
        super(props)
        this.createBidsHistories = this.createBidsHistories.bind(this)
        this.createHistoryMobile = this.createHistoryMobile.bind(this)
        this.state = {
            myBids: [],
            title: '',
            item_photo: ''
        }
    }

    componentDidMount(){
        request
            .get(`/bids/user_id/${localStorage.getItem('user_id')}`)
            .then(response => response.data)
            .then(data => {
                console.log(data)
                data.forEach(item => {
                    request
                        .get(`/auctions/${item.auction_id}`)
                        .then((response) => { 
                            //console.log('RESPONSE : ', response)
                            return response.data 
                        })
                        .then(dataAuction => {
                            request
                                .get(`/users/id/${dataAuction.user_id}`)
                                .then((response) => {return response.data.user})
                                .then(dataDetail => {
                                    this.setState(prevState => {
                                        //console.log(prevState.myBids)
                                        // console.log(dataDetail)
                                        return {
                                            myBids: prevState.myBids.concat({
                                                bids_nominal: item.bids_nominal,
                                                status: item.status,
                                                created_at: item.created_at,
                                                auction_id: item.auction_id,
                                                user_id: item.user_id,
                                                title: item.auction.title,
                                                item_photo : item.auction.item_photo,
                                                username: dataDetail.username
                                            })
                                        }
                                    })
                                })
                                
                            
                            //console.log('LOG FROM AUCTION: ', this.state.title)
                        })
                        .catch(error=>{console.log(error)})

                    
                })
            })
            .catch(error=>{console.log(error)})
    }

    createBidsHistories(item, index) {
        return (
            <tr key={index}>
                <td>{moment(item.created_at).format('ll')}</td>
                <td>{moment(item.created_at).format('LT')}</td>
                <td>{item.title}</td>
                <td>{item.username}</td>
                <td><NumberFormat value={item.bids_nominal} displayType={'text'} thousandSeparator={true} prefix={'IDR. '}/></td>
                <td>{item.status}</td>
            </tr>
        )
    }

    createHistoryMobile(item, index) {
        //console.log(item)
        return (
            <div key={index} >
                <Card className="text-center" style={styles.cards}>
                    <CardImg 
                        top
                        src={item.item_photo}
                        alt="Image"
                    />
                    <CardBody>
                        <CardText><b>Date :</b> {moment(item.created_at).format('ll')}</CardText>
                        <CardText><b>Time :</b> {moment(item.created_at).format('LT')}</CardText>
                        <CardText><b>Bids :</b> {item.title}</CardText>
                        <CardText><b>Seller :</b>{item.username}</CardText>
                        <CardText><b>My Bid :</b><NumberFormat value={item.bids_nominal} displayType={'text'} thousandSeparator={true} prefix={'IDR. '}/></CardText>
                        <CardText><span><b>Status : </b>{item.status}</span></CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    render() {
        console.log('My Bids : ', this.state.myBids)
        let listBidHistories = this.state.myBids.map(this.createBidsHistories)
        let listHistoryMobile = this.state.myBids.map(this.createHistoryMobile)
        return (
            <div>
                <div className="d-none d-sm-block">
                    <Table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Bids</th>
                                <th>Seller</th>
                                <th>My Bid</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listBidHistories}
                        </tbody>
                    </Table>
                    
                </div>
                <div className="d-sm-none d-md-none d-lg-none d-xs-block">
                    
                    {listHistoryMobile}
                    
                </div>
            </div>
                
        )
    }
}

export default MyBid