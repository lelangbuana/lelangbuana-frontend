import React, {Component} from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
    Container,
    Row,
    Col, 
    Label
} from 'reactstrap'

import Footer from '../Components/Footer'
import Profile from '../Components/Profile'
import CreateAnAuction1 from '../Components/CreateAnAuction1'

const mapStateToProps = state => {
    return {
        auction: state.user.auction
    }
}


class MakeAuction extends Component {
    static get propTypes() {
        return {
            children: PropTypes.any,
            dispatch: PropTypes.any,
            auction: PropTypes.object
        }
    }
    state = {
        user_id: "",
                title: "",
                item_condition: "",
                item_description: "",
                quantity: "",
                start_bid: "",
                max_bid: "",
                min_bid: "",
                bids_multiply: "",
                start_date: "",
                end_date: "",
                item_photo: "",
                status: "",
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
      }

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
export default connect(mapStateToProps)(MakeAuction)