import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ReactFilestack from 'filestack-react'
import DatePicker from 'react-datepicker';

import moment from 'moment'


import 'react-datepicker/dist/react-datepicker.css';


import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Container,
    Row,
    Col
} from 'reactstrap'

import 'react-datepicker/dist/react-datepicker.css';

const styles = {
    button : {
        width : '100px'
    }
}

const mapStateToProps = state => {
    return {
        auction: state.user.auction
    }
}
const request = axios.create({
    baseURL: 'https://lelangbuana.herokuapp.com' || 'http://localhost:3000',
    timeout: 10000,
    headers: { Authorization: '' }
})

const options = {
    accept: 'image/*',
    fromSources: ['local_file_system'],
    maxSize: 640 * 640,
    maxFiles: 1
  }

const keys = {
    filestackKey : 'AQulXUyRXS1GqTZvYuubfz'
}

class CreateAnAuction1 extends Component {
    constructor (props) {
        super(props)
        this.state = {
        user_id: 0,
        title: '',
        item_condition: '',
        item_description: '',
        quantity: 0,
        start_bid: 0,
        max_bid: 0,
        min_bid: 0,
        bids_multiply: 0,
        start_date: moment(),
        end_date: moment(),
        item_photo: '',
        status: 'ongoing',
        category_id: '1',
        selectedFile : null
        };
        this.handleChangeDate = this.handleChangeDate.bind(this);
      }

      handleChangeDate(date) {
        this.setState({
            end_date: date
        });

    }

    static get propTypes() {
        return {
            children: PropTypes.any,
            dispatch: PropTypes.any,
            auction: PropTypes.object
        }
    }
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()

        const payload = {
            user_id: localStorage.getItem("user_id"),
            title: this.state.title,
            item_condition: this.state.item_condition,
            item_description: this.state.item_description,
            quantity: this.state.quantity,
            start_bid: this.state.min_bid,
            max_bid: this.state.max_bid,
            min_bid: this.state.min_bid,
            bids_multiply: this.state.bids_multiply,
            start_date: this.state.start_date,
            end_date: this.state.end_date,
            item_photo: this.state.url,
            status: this.state.status,
            category_id : this.state.category_id
        }

        request
            .post('/auctions', payload)
            .then(response => {
            })
            .catch(error => {
                console.log(error)
            }) 
                
    }
    onSuccess = (result) => {
        this.setState({
          url: result.filesUploaded[0].url
        })
      }
      onError = (error) => {
        console.error('error', error);
    } 

    render() {
        return (
            <Container>
                <Row>
                    <Col lg="8">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="title">Title</Label>
                                {/* <Input type="text" name="itemname" id="itemname" placeholder="" /> */}
                                <Input
                                    onChange={this.handleChange}
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Auction Title"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="quantity">Quantity</Label>
                                {/* <Input type="number" name="quantity" id="quantity" placeholder="" min="1" /> */}
                                <Input
                                    onChange={this.handleChange}
                                    type="number"
                                    name="quantity"
                                    id="quantity"
                                    placeholder="quantity"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="minbid">Min. Bid Price</Label>
                                {/* <Input type="number" name="minbid" id="minbid" placeholder="" min="0"/> */}
                                <Input
                                    onChange={this.handleChange}
                                    type="number"
                                    name="min_bid"
                                    id="min_bid"
                                    placeholder="Min Bid"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="maxbid">Max. Bid Price</Label>
                                {/* <Input type="number" name="maxbid" id="maxbid" placeholder="" min="0"/> */}
                                <Input
                                    onChange={this.handleChange}
                                    type="number"
                                    name="max_bid"
                                    id="max_bid"
                                    placeholder="Max Bid"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="startdate">Start date</Label> 
                                <DatePicker
                                    name="start_date"
                                    id="start_date"
                                    selected={this.state.start_date}
                                    dateFormat="lll"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="closingdate">Closing date</Label>                
                                <DatePicker
                                    name="end_date"
                                    id="end_date"
                                    isClearable={true}
                                    selected={this.state.end_date}
                                    onChange={this.handleChangeDate}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={30}
                                    dateFormat="lll"
                                    timeCaption="time"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="item_condition">
                                    Item Condition
                                </Label>
                                <Input
                                onChange={this.handleChange} 
                                type="select" 
                                name="item_condition" 
                                id="item_condition"
                                placeholder="Item Condition">
                                    <option>New</option>
                                    <option>Refurbished</option>
                                    <option>Used - Like New</option>
                                    <option>Used - Very Good</option>
                                    <option>Used - Good</option>
                                    <option>Unacceptable</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="bidincrement">
                                    Bid Increment (IDR.)
                                </Label>

                                <Input 
                                onChange={this.handleChange}
                                type="select" 
                                name="bids_multiply" 
                                id="bids_multiply"
                                placeholder="Bid Increment">
                                    <option>5000</option>
                                    <option>10000</option>
                                    <option>20000</option>
                                    <option>50000</option>
                                    <option>100000</option>
                                    <option>1000000</option>
                                    <option>5000000</option>
                                    <option>10000000</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="itemdesc">Item Description</Label>
                                <Input 
                                onChange={this.handleChange}
                                type="textarea" 
                                name="item_description" 
                                id="item_description"
                                placeholder="Maximum 300 Character" />
                            </FormGroup>
                        <FormGroup>
                            <Label for="image">
                            Image : 
                            </Label>
                            <ReactFilestack
                                apikey= {keys.filestackKey}
                                buttonText="Upload"
                                buttonClass="ui medium button gray"
                                options={options}
                                onSuccess={this.onSuccess}
                                onError={this.onError}
                                />
                        </FormGroup>
                            <Button style={styles.button} onClick={this.props.handleSubmit}>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(mapStateToProps)(CreateAnAuction1)
