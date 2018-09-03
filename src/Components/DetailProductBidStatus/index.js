import React, {Component} from 'react'
import axios from 'axios'
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
        highest_bid: state.auction.highest_bid,
        login: state.user.login,
        username: state.user.login.username
    }
}
class DetailProductBidStatus extends Component{

    handleChange = (event,props) => {
        this.setState({ 
            [event.target.name]: event.target.value,
            auction_id: this.props.auction_id,
            user_id: this.props.user_id,
            max_bid: this.props.max_bid
        })
    }
    
    handleSubmit = event => {
        event.preventDefault()
        
        const payload = {
            bids_nominal: this.state.bid_nominal,
            bid_id: this.props.bid_id,
            auction_id: this.props.auction_id,
            user_id: this.props.user_id,
            max_bid: this.state.max_bid
        }

        // request
        //     .get(`/users/${this.props.username}`)
        //     .then((response) => {
        //         const action = {
        //             type: 'SET_ID',
        //             payload: {
        //             user_id: response.data.user.user_id
        //             }
        //         }
        //         this.props.dispatch(action)
        //         console.log(action);
        //         console.log("user_id : ", this.props.user_id)
                
        //     })
        //     .catch(error=>{console.log(error)})

        request
        .get('/bids',payload)
        .then((response) => {
          this.props.dispatch({
              type: 'BID',
              payload: {
                bids_nominal: this.state.bid_nominal,
                bid_id: this.state.bid_id,
                auction_id: this.state.auction_id,
                user_id: this.state.user_id,
                max_bid: this.props.max_bid
              }
            })
            console.log("BID STATE", this.props)
      })
      .catch(error=>{console.log(error)})
    }

    render(){
        return(
            <div style={styles.text}>
                <Container >  
                    <Row><Col style={styles.title}><span>Current Price</span></Col></Row>
                    <Row><Col><span>IDR. </span></Col></Row>
                    <Row style={styles.contains}><Col ><span>{this.props.openingPrice}</span></Col></Row>
                    <hr/>
                    <Row><Col style={styles.title}><span>Buyout Price</span></Col></Row>
                    <Row style={styles.contains}><Col><span>IDR {this.props.buyOutPrice}</span></Col></Row> 
                    <hr/>
                    <Row><Col style={styles.title}><span>Time Remaining</span></Col></Row>
                    <Row style={styles.contains}><Col><span></span></Col></Row>
                    <hr/>
                    <Row><Col style={styles.title}><span>Seller</span></Col></Row>
                    <Row style={styles.contains}><Col><span>{this.props.seller}</span></Col></Row>
                    <hr/>
                    <Row style={styles.contains}>
                        <Col><span>Bid Increment : IDR. </span></Col>
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
                                    step="5000"
                                    min={this.props.highest_bid+5000}
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