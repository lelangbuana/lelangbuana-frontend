import React from 'react'
import axios from 'axios'
import {Collapse, Table, Card, CardBody} from 'reactstrap'
import moment from 'moment'

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


class DetailItem extends React.Component {

    constructor(props){
        super(props)
        this.state={
            myBids: []
        }
    }

    render(){
        const Detail = this.state.myBids.forEach(item => {
            console.log(item)
            return <tr><td>helo</td></tr>
        })

        return(
            <div>
                <div className="d-none d-sm-block">
                    <Collapse isOpen={this.props.isOpen}>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Closed Date</th>
                                    <th>Closed Time</th>
                                    <th>Users</th>
                                    <th>Bid Price</th>
                                    {/* <th>Status</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {Detail}
                                <tr >
                                    <td>{moment().format('ll')}</td>
                                    <td>{moment().format('LT')}</td>
                                    <td>{moment(this.props.endDate).format('ll')}</td>
                                    <td>{moment(this.props.endDate).format('LT')}</td>
                                    <td>{this.props.username} </td>
                                    <td>{this.props.bids_nominal}</td>
                                    {/* <td>Success</td> */}
                                </tr>
                            </tbody>
                        </Table>
                    </Collapse>
                </div>
                <div className="d-sm-none">
                    <Collapse isOpen={this.props.isOpen}>
                        <Card className="text-center" style={styles.cards}>
                            <CardBody>
                                {/* <CardText><b>Date :</b> {moment().format('ll')}</CardText>
                                <CardText><b>Time :</b> {moment().format('LT')}</CardText>
                                <CardText><b>Closed Time :</b> {moment(item.created_at).format('ll')}</CardText>
                                <CardText><b>Current Time :</b> {moment(item.created_at).format('LT')}</CardText>
                                <CardText><b>Users :</b> {item.username}</CardText>
                                <CardText><b>Bid Price :</b>{item.bids_nominal}</CardText>
                                <CardText><span><b>Status : </b> Success</span></CardText> */}
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
            </div> 
        )
    }


    componentDidMount(){
        request
            .get(`/bids/auction_id/${this.props.auction_id}`)
            .then(response => { 
                console.log(response)
                const data = response.data.forEach(item => {
                    const { bids_nominal, username } = item
                    return {
                        bids_nominal,
                        username
                    }
                })
                console.log(data)
                this.setState({
                    myBids: data || []
                })                            
            })
            .catch(error=> {console.log(error)
            })
        
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
    }
}

export default DetailItem