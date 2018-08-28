import React, {Component} from 'react'

import { Button, Form, FormGroup, Label, 
    Input, Container, Row, Col } from 'reactstrap'

class CreateAnAuction1 extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col lg='8'>
                        <Form>
                            <FormGroup>
                                <Label for="itemname">Item Name</Label>
                                <Input type="text" name="itemname" id="itemname" placeholder="" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="quantity">Quantity</Label>
                                <Input type="number" name="quantity" id="quantity" placeholder="" min="1" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="minbid">Min. Bid Price</Label>
                                <Input type="number" name="minbid" id="minbid" placeholder="" min="0"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="maxbid">Max. Bid Price</Label>
                                <Input type="number" name="maxbid" id="maxbid" placeholder="" min="0"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="closingdate">Closing date</Label>
                                <Input type="date" name="closingdate" id="closingdate" placeholder="" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="closingtime">Closing Time</Label>
                                <Input type="time" name="closingtime" id="closingtime" placeholder="" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="itemcondition">Item Condition</Label>
                                <Input type="select" name="itemcondition" id="itemcondition">
                                    <option>New</option>
                                    <option>Refurbished</option>
                                    <option>Used - Like New</option>
                                    <option>Used - Very Good</option>
                                    <option>Used - Good</option>
                                    <option>Unacceptable</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="bidincrement">Bid Increment (IDR.)</Label>
                                <Input type="select" name="bidincrement" id="bidincrement">
                                    <option>5000</option>
                                    <option>10000</option>
                                    <option>20000</option>
                                    <option>50000</option>
                                    <option>100000</option>
                                    <option>1000000</option>
                                    <option>5000000</option>
                                    <option>10000000</option>
                                </Input>
                            </FormGroup>
                            <Button onClick={this.props.submits}>Next</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default CreateAnAuction1