import React, { Component } from 'react'

import {
    Container,
    Row,
    Col,
    Label
} from 'reactstrap'

import Profile from '../Components/Profile'
import MyBid from '../Components/MyBid'

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

class MyBidDashboard extends Component {
    render(){
        return(
            <div style={styles.space}>
                <Container fluid>
                    <Row>
                        <Col sm="3">          
                            <Profile/>
                        </Col>
                        <Col sm="8">
                            <Label style={styles.label}>My Bid Dashboard</Label>
                            <Row>
                                <Col>
                                    <MyBid/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default MyBidDashboard