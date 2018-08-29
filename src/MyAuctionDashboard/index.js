import React, { Component } from 'react'

import {
    Container,
    Row,
    Col,
    Label
} from 'reactstrap'

import Profile from '../Components/Profile'
import MyAuction from '../Components/MyAuction'

class MyAuctionDashboard extends Component {
    render(){
        return(
            <Container fluid>
                <Row>
                    <Col sm="2">          
                        <Profile/>
                    </Col>
                    <Col sm="10">
                        <Label>My Auction Dashboard</Label>
                        <Row>
                            <Col>
                                <MyAuction/>
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

export default MyAuctionDashboard