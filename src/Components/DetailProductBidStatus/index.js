import React, {Component} from 'react'
import axios from 'axios'
import Countdown from 'react-countdown-now';
import { connect } from 'react-redux'
import {Container, Row, Col, Form, 
    Input, Button} from 'reactstrap'

const styles = {
    text : {
        textAlign :'center'
    },
    title : {
        fontSize : '18px',
        fontWeight : 'bold'
    },
    button : {
        width : '250px'
    },
    contains : {
        marginBottom : '10px'
    }
    
}

const request = axios.create({
    baseURL: 'https://lelangbuana.herokuapp.com' || 'http://localhost:3000',
    timeout: 10000,
    headers: { Authorization: '' }
})

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

class DetailProductBidStatus extends Component{

    componentDidMount(){
        
    }

    handleChange = (event,props) => {
        this.setState({ 
            [event.target.name]: event.target.value,
            auction_id: this.props.auction_id,
            user_id: this.props.user_id,
            max_bid: this.props.max_bid
        })
    }

    tick(){
        
    }
    
    handleSubmit = event => {
        event.preventDefault()
        
        const payload = {
            bids_nominal: this.state.bid_nominal,
            auction_id: this.props.auction_id,
            user_id: localStorage.getItem('user_id'),
            status: ""
        }
        console.log("PAYLOAD",payload);
        
        request
        .post('/bids',payload)
        .then((response) => {
          this.props.dispatch({
              type: 'BID',
              payload: {
                bids_nominal: this.state.bid_nominal,
                auction_id: this.state.auction_id,
                user_id: localStorage.getItem('user_id'),
                max_bid: this.props.max_bid
              }
            })
            console.log("BID STATE", response)
      })
      .catch(error=>{console.log(error)})
    }

    render(){

        let startBid
        let enableCountDown
        this.props.highest_bid>=this.props.start_bid
        ? startBid = this.props.highest_bid + this.props.bids_multiply
        : startBid = this.props.start_bid + this.props.bids_multiply

        let now = Date.now()
        let end = Date.parse(this.props.end_date)
        let start = Date.parse(this.props.start_date)

        now<=end
        ? enableCountDown = <Countdown  date={ start + (end-start)}><h3>CLOSED</h3></Countdown>
        : enableCountDown = <h3>CLOSED</h3>
        

        console.log("STATUS: ", this.props.status);
        
        return(
            <div style={styles.text}>
                <Container >  
                    <Row><Col style={styles.title}><span>Current Price</span></Col></Row>
                    <Row style={styles.contains}><Col ><span> IDR. {this.props.highest_bid}</span></Col></Row>
                    <hr/>
                    <Row><Col style={styles.title}><span>Buyout Price</span></Col></Row>
                    <Row style={styles.contains}><Col><span> IDR. {this.props.buyOutPrice}</span></Col></Row> 
                    <hr/>
                    <Row><Col style={styles.title}>
                    <span>Time Remaining 
                    </span>
                    </Col></Row>
                    <Row style={styles.contains}><Col><span>
                    {enableCountDown}
                        </span></Col></Row>
                    <hr/>
                    <Row><Col style={styles.title}><span>Seller</span></Col></Row>
                    <Row style={styles.contains}><Col><span>{this.props.seller}</span></Col></Row>
                    <hr/>
                    <Row style={styles.contains}>
                        <Col><span>Bid Increment : {this.props.bids_multiply} </span></Col>
                    </Row>
                    <Row style={styles.contains}>
                        <Col >
                            <Form lg="6">
                                <Input
                                    onChange={this.handleChange}
                                    type="number"
                                    name="bid_nominal"
                                    id="bid_nominal"
                                    placeholder="IDR."
                                    step={this.props.bids_multiply}
                                    min={startBid}
                                />
                            </Form>
                        </Col>
                    </Row>
                    <Row style={styles.contains}> 
                        <Col>
                            <Button style={styles.button} onClick={this.handleSubmit}> Bid Now</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col><Button color="warning" style={styles.button}> Win for Buyout Price </Button></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default connect (mapStateToProps)(DetailProductBidStatus)