import React, { Component } from 'react'

import {
    Container,
    Row,
    Col,
    Label
} from 'reactstrap'

import Profile from '../Components/Profile'
import MyBid from '../Components/MyBid'
import Footer from '../Components/Footer'

class MyBidDashboard extends Component {
    render(){
        return(
            <Container fluid>
                <Row>
                    <Col sm="2">          
                        <Profile/>
                    </Col>
                    <Col sm="10">
                        <Label>My Bid Dashboard</Label>
                        <Row>
                            <Col>
                                <MyBid/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Footer/>
                </Row>
            </Container>
        )
    }
}

export default MyBidDashboard