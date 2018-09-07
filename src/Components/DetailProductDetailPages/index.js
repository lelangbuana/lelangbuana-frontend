import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import Loader from '../Assets/loader.gif'

import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col
} from 'reactstrap'
import classnames from 'classnames'

let bids = []
const styles = {
    p : {
        fontWeight : 'bold',
        fontSize : '18px'
    },
    span :{
        fontSize : '14px'
    }
}

const request = axios.create({
    baseURL: 'https://lelangbuana.herokuapp.com' || 'http://localhost:3000',
    timeout: 10000,
    headers: { Authorization: '' }
})

const mapStateToProps = state => {
    return {
        item_description: state.auction.item_description,
        username: state.user.username,
        phone_number : state.user.phone_number,
        address : state.user.address
    }
}

class DetailProductDetailPages extends React.Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = {
            activeTab: '1',
            loading: true
        }
    }

    UNSAFE_componentWillMount(){
        request
            .get(`/auctions/${this.props.params}`)
            .then(response => {
                response.data.bids.map(item => {
                    return(
                        bids.push({
                            auction_id: item.auction_id,
                            bid_id: item.bid_id,
                            bids_nominal: item.bids_nominal,
                            status: item.status,
                            user_id: item.user_id })
                    )
                })
            })
            .catch(error=>{
                console.log(error)
            })
        console.log('BID DATA HISTORIES:  ', bids)
    }

    componentDidMount(){
        setTimeout(() => this.setState({ loading: false }), 1500)
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            })
        }
    }

    createBidsHistories(item,index){
        <Col key={index}>
            <p>AUCTION : {item.auction_id}</p>
            <p>BIDS : {item.bids_nominal}</p>
            <p>STATUS : {item.status}</p>
        </Col>

    }

    render() {
        const { loading } = this.state

        if(loading) { // if your component doesn't have to wait for an async action, remove this block 
            return <div className="text-center"><img src={Loader} alt="loading..." className="mx-auto d-block" /></div>  // render null when app is not ready
        }

        let bids_histories= bids.map((item,index)=> {
            return (
                <Col key={index}>
                    <p>AUCTION : {item.auction_id}</p>
                    <p>BIDS : {item.bids_nominal}</p>
                    <p>STATUS : {item.status}</p>
                </Col>
            )
        })
        
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            to="/"
                            className={classnames({
                                active: this.state.activeTab === '1'
                            })}
                            onClick={() => {
                                this.toggle('1')
                            }}
                        >
                            Item Info
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            to="/"
                            className={classnames({
                                active: this.state.activeTab === '2'
                            })}
                            onClick={() => {
                                this.toggle('2')
                            }}
                        >
                            Seller Info
                        </NavLink>
                    </NavItem>
                    {/* <NavItem>
                        <NavLink
                            to="/"
                            className={classnames({
                                active: this.state.activeTab === '3'
                            })}
                            onClick={() => {
                                this.toggle('3')
                            }}
                        >
                            Bid History
                        </NavLink>
                    </NavItem> */}
                </Nav>

                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col >
                                <p style={styles.span}>{this.props.item_description}</p>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col>
                                <p style={styles.p}>Seller</p>
                                <span style={styles.span}>{this.props.username}</span>
                                <hr/>
                                <p style={styles.p}>Phone</p>
                                <span style={styles.span}>{this.props.phone_number}</span>
                                <hr/>
                                <p style={styles.p}>Address</p>
                                <span style={styles.span}>{this.props.address}</span>
                            </Col>
                        </Row>
                    </TabPane>
                    {/* <TabPane tabId="3">
                        <Row>
                            {bids_histories}
                        </Row>
                    </TabPane> */}
                </TabContent>
            </div>
        )
    }
}

export default connect (mapStateToProps) (DetailProductDetailPages)