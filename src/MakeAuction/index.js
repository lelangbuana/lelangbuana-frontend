import React, {Component} from 'react'

import {
    Container,
    Row,
    Col, 
    Label
} from 'reactstrap'

import Profile from '../Components/Profile'
import CreateAnAuction1 from '../Components/CreateAnAuction1'

const styles ={
    space : {
        marginTop : '2rem',
        marginBottom: '5rem'
    }

}

class MakeAuction extends Component {
    render(){
        return(
            <div style={styles.space}>
                <Container fluid>
                    <Row>
                        <Col sm="3">    
                            <Profile/>  
                        </Col>
                        <Col sm="8">
                            <Label>Create An Auction - Lelangbuana.com</Label>
                            <Row>
                                <Col>
                                    <CreateAnAuction1/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default MakeAuction