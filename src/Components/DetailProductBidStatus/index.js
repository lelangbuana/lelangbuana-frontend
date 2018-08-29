import React, {Component} from 'react'
import {Container, Row, Col, Form, 
    Input, Button} from 'reactstrap'

const styles = {
    text : {
        textAlign :'center'
    },
    title : {
        fontSize : '18px',
        fontWeight : 'bold'
    },
    button : {
        width : '250px'
    },
    contains : {
        marginBottom : '10px'
    }
    
}

class DetailProductBidStatus extends Component{
    render(){
        return(
            <div style={styles.text}>
                <Container >  
                    <Row><Col style={styles.title}><span>Current Price</span></Col></Row>
                    <Row><Col><span>IDR. </span></Col></Row>
                    <Row style={styles.contains}><Col ><span>(Start from: IDR )</span></Col></Row>
                    <hr/>
                    <Row><Col style={styles.title}><span>Buyout Price</span></Col></Row>
                    <Row style={styles.contains}><Col><span>IDR. </span></Col></Row> 
                    <hr/>
                    <Row><Col style={styles.title}><span>Time Remaining</span></Col></Row>
                    <Row style={styles.contains}><Col><span></span></Col></Row>
                    <hr/>
                    <Row><Col style={styles.title}><span>Seller</span></Col></Row>
                    <Row style={styles.contains}><Col><span>AgungHercules</span></Col></Row>
                    <hr/>
                    <Row style={styles.contains}>
                        <Col><span>Bid Increment : IDR. </span></Col>
                    </Row>
                    <Row style={styles.contains}>
                        <Col >
                            <Form lg="6">
                                <Input type="number" name="bidprice" id="bidprice" placeholder="IDR. " min="5000"/> 
                            </Form>
                        </Col>
                    </Row>
                    <Row style={styles.contains}> 
                        <Col>
                            <Button style={styles.button} > Bid Now</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col><Button color="warning" style={styles.button}> Win for Buyout Price </Button></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default DetailProductBidStatus