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

import Profile from '../Components/Profile'
import CreateAnAuction1 from '../Components/CreateAnAuction1'


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
            <div style={styles.space}>
                <Container fluid>
                    <Row>
                        <Col sm="3">    
                            <Profile/>  
                        </Col>
                        <Col sm="9">
                            <Label style={styles.label}>Create An Auction - Lelangbuana.com</Label>
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
export default connect(mapStateToProps)(MakeAuction)