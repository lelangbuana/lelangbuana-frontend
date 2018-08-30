import React, {Component} for 'react'

import {
    Container,
    Row,
    Col, 
    Label
} from 'reactstrap'

import Profile from '../Components/Profile'
import CreateAnAuction2 from '../Components/CreateAnAuction2'

class Submission extends Component {
    constructor(props){
        super(props)
        this.submits=this.submits.bind(this)
    }
submits(props){
    return <CreateAnAuction2/>
}

render(){
    let AllSubmit = this.submits
    return(
        <div>
            <Container fluid>
                <Row>
                    <Col sm="2">
                        
                        <Profile/>
                        
                    </Col>
                    <Col sm="10">
                        <Label>Hatsune Miku Snow Ver. Dakimakura</Label>
                        <Row>
                            <Col>
                                {AllSubmit}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
}
export default Submission