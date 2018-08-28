import React, {Component} from 'react'

import {
    Container,
    Row,
    Col, 
    Label
} from 'reactstrap'

import Footer from '../Component/Footer'
import Profile from '../Component/Profile'
import CreateAnAuction1 from '../Component/CreateAnAuction1'

class MakeAuction extends Component {
    render(){
        return(
            <div>
                <Container fluid>
                    <Row>
                        <Col sm="2">    
                            <Profile/>  
                        </Col>
                        <Col sm="10">
                            <Label>Create An Auction - Lelangbuana.com</Label>
                            <Row>
                                <Col>
                                    <CreateAnAuction1/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Footer/>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default MakeAuction