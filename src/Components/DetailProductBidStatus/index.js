import React, {Component} from 'react'
import axios from 'axios'
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

class DetailProductBidStatus extends Component{
    componentDidMount(){
        request
            .get('/bids')
            .then((response) => {
                console.log(response)
                
                this.setState((prevState) => {
                    return { 
                        bids: response.data.bids.length
                        
                        
                    },
                    console.log(response.data.bids.length)
                })
                
                // console.log(this.state.auction.title)
                
            })
            .catch(error=>{console.log(error)})
    }

    

    handleClick(){
        request
            .get('/bids')
            .then((response) => {
                console.log(response)
                
                // this.setState((prevState) => {
                //     return { 
                //         auction_id: response.data.auction_id,
                //         title: response.data.title,
                //         item_condition: response.data.item_condition,
                //         item_description: response.data.item_description,
                //         quantity: response.data.quantity,
                //         start_bid: response.data.start_bid,
                //         max_bid: response.data.max_bid,
                //         min_bid: response.data.min_bid,
                //         bids_multiply: response.data.bids_multiply,
                //         start_date: response.data.start_date,
                //         end_date: response.data.end_date,
                //         item_photo: response.data.item_photo,
                //         status: response.data.status,
                //         user_id: response.data.user_id,
                //         username: response.data.username
                        
                //     }
                //     // console.log(response.data)
                // })
                
                // console.log(this.state.auction.title)
                
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
                                <Input type="number" name="bidprice" id="bidprice" placeholder="IDR. " min="5000"/> 
                            </Form>
                        </Col>
                    </Row>
                    <Row style={styles.contains}> 
                        <Col>
                            <Button style={styles.button} onClick={this.handleClick}> Bid Now</Button>
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

export default DetailProductBidStatus