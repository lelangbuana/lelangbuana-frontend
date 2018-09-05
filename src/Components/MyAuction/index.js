import React, {Component} from 'react'
import axios from 'axios'
import {
    Container,
    ListGroup,
    Collapse,
    ListGroupItem,
    Media,
    Table
} from 'reactstrap'

const request = axios.create({
    baseURL: 'https://lelangbuana.herokuapp.com' || 'http://localhost:3000',
    timeout: 10000,
    headers: { Authorization: '' }
})

const styles = {
    image : {
        width : '150px',
        height : '120px'
    }
}

class MyAuction extends Component {
    
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.createAuctions = this.createAuctions.bind(this)
        this.state = { collapse: false }
        this.state = {
            max_bid: 0,
            min_bid: 0,
            highest_bid: 0,
            myAuctions: []

        }
    }

    componentDidMount(){
        request
            .get(`/auctions/user_id/${localStorage.getItem('user_id')}`)
            .then((response) => {return response})
            .then(data => {
                
                data.data.forEach(item => {
                    this.setState(prevState => {
                        console.log(prevState.myAuctions)
                        return {
                            myAuctions: prevState.myAuctions.concat({
                                title: item.title,
                                max_bid: item.max_bid,
                                min_bid: item.min_bid,
                                item_photo: item.item_photo
                            })
                        }
                    })
                })
                console.log('AUCTIONS DATA: ', this.state.myAuctions)

                // this.setState(prevState => {
                //     console.log(prevState.myBids)
                
                //     return {
                //         myBids: prevState.myBids.concat({
                //             bids_nominal: item.bids_nominal,
                //             created_at: item.created_at,
                //             auction_id: item.auction_id,
                //             user_id: item.user_id,
                //             title: data.title,
                //             username: username
                //         })
                //     }
                // })
            })
            .catch(error=>{console.log(error)})
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse })
    }

    createAuctions(item, index) {
        return (
            <ListGroup key={index}>
                <ListGroupItem onClick={this.toggle}>
                    <Media>
                        <Media left href="">
                            <Media style={styles.image}
                                object
                                src={item.item_photo}
                                alt="Generic placeholder image"
                            />
                        </Media>
                        <Media body>
                            <Media heading>{item.title}</Media>
                            <Media>
                                <span>Expected Price : {item.max_bid} </span>
                            </Media>
                            <Media>
                                <span>Current Price : </span>
                            </Media>
                            <Media>
                                <span>From : {item.min_bid}</span>
                            </Media>
                        </Media>
                    </Media>
                </ListGroupItem>
                <Collapse key={index} isOpen={this.state.collapse}>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Closed Date</th>
                                <th>Closed Time</th>
                                <th>User</th>
                                <th>Bid Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </Table>
                </Collapse>
            </ListGroup>
            
        )
    }

    render() {
        let auctions = this.state.myAuctions.map(this.createAuctions)
        return (
            <Container>
                {auctions}
            </Container>
        )
    }
}

export default MyAuction
