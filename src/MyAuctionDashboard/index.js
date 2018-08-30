import React, { Component } from 'react'

import {
    Container,
    Row,
    Col,
    Label
} from 'reactstrap'

import Profile from '../Components/Profile'
import MyAuction from '../Components/MyAuction'

const styles ={
    space : {
        marginTop : '2rem',
        marginBottom: '5rem'
    },

    label: {
        fontSize: '25px',
        fontWeight :'bold'
    }

}

class MyAuctionDashboard extends Component {
    render(){
        return(
            <div style={styles.space}>
                <Container fluid>
                    <Row>
                        <Col sm="3">          
                            <Profile/>
                        </Col>
                        <Col sm="9">
                            <Label style={styles.label}>My Auction Dashboard</Label>
                            <Row>
                                <Col>
                                    <MyAuction/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default MyAuctionDashboard