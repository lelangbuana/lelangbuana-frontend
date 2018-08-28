import React, {Component} from 'react'
import {Container, Row, Col, Form, 
    FormGroup, Input, Button} from 'reactstrap'

class DetailProductBidStatus extends Component{
    render(){
        return(
            <Container>
                <Row> 
                    <span>Current Price</span>
                    <span>IDR. </span>
                    <span>(Start from : IDR )</span>
                    
                </Row>
                <Row>
                    <Col><span>Buyout Price</span></Col>
                    <Col><span>IDR. </span></Col>
                </Row>
                <Row>
                    <Col><span>Time Remaining</span></Col>
                    <Col><span></span></Col>
                </Row>
                <Row>
                    <Col><span>Seller</span></Col>
                    <Col><span></span></Col>
                </Row>
                <Row>
                    <Col><Button color="warning"> Win Now for Buyout Price</Button></Col>
                </Row>
                <Row>
                    <Col><span>Bid Increment : IDR. </span></Col>
                </Row>
                <Row>
                    <Form inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Input type="number" name="bid" id="bid" placeholder="IDR. " min="5000" />
                        </FormGroup>
                        <Button>Start Bid</Button>
                    </Form>
                </Row>
            </Container>
        )
    }
}

export default DetailProductBidStatus