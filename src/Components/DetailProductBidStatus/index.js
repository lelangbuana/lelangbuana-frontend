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

const mapStateToProps = state => {
    return {
        bid_id: state.bid_id,
        bids_nominal: state.bids_nominal,
        auction_id: state.auction.auction_id,
        user_id: state.auction.user_id
    }
}
class DetailProductBidStatus extends Component{

    

    handleChange = (event,props) => {
        this.setState({ 
            [event.target.name]: event.target.value,
            auction_id: this.props.auction_id,
            user_id: this.props.user_id
        })
    }
    
    handleSubmit = event => {
        event.preventDefault()
        
        const payload = {
            bids_nominal: this.state.auction,
            bid_id: this.state.bid_id,
            auction_id: this.state,
            user_id: this.state.user_id
        }
        request
        
        
        .get('/bids',payload)
        .then((response) => {
        console.log("BID STATE", this.state)
          this.props.dispatch({
              type: 'BID',
              payload: {
                bids: payload,
              }
            })
      })
      .catch(error=>{console.log(error)})
      console.log(payload)
    }

    render(){
                const bid = this.state
                
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
                                {/* <Input type="number" name="bidprice" id="bidprice" placeholder="IDR. " min="5000"/>  */}
                                <Input
                                    onChange={this.handleChange}
                                    type="number"
                                    name="bid_nominal"
                                    id="bid_nominal"
                                    placeholder="IDR."
                                    step="5000"
                                    min="0"
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