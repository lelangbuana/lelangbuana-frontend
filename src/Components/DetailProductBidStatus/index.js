import React from 'react'
import {Container, Row, Col, Form, 
    FormGroup, Input, Button} from 'reactstrap'

export default class DetailProductBidStatus extends React.Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col><span>Current Price</span></Col>
                    <Col><span>IDR. </span></Col>
                    <Col><span>(Start from : IDR )</span></Col>
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