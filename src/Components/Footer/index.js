import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const position ={
    backgroundColor : 'grey'
}

class Footer extends React.Component {
    render() {
        return (  
            <div style={position}>
                <Container >
                    <Row>
                        <Col >
                            <p> © 2018 Hak Cipta lelangbuana.com </p>
                        </Col>
                    </Row>
                </Container>
            </div>   
        )
    }
}
export default Footer