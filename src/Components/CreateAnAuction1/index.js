import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ReactFilestack from 'filestack-react'


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
    static get propTypes() {
        return {
            children: PropTypes.any,
            dispatch: PropTypes.any,
            auction: PropTypes.object
        }
    }
    state = {
        user_id: 1,
        title: '',
        item_condition: '',
        item_description: 'Yo Yo Yo mamen',
        quantity: 0,
        start_bid: 5000,
        max_bid: 0,
        min_bid: 0,
        bids_multiply: 0,
        start_date: '09-09-2018',
        end_date: '',
        item_photo: '',
        status: 'success',
        category_id: 1,
        selectedFile : null
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()

        const payload = {
            user_id: this.state.user_id,
            title: this.state.title,
            item_condition: this.state.item_condition,
            item_description: this.state.item_description,
            quantity: this.state.quantity,
            start_bid: this.state.start_bid,
            max_bid: this.state.max_bid,
            min_bid: this.state.min_bid,
            bids_multiply: this.state.bids_multiply,
            start_date: this.state.start_date,
            end_date: this.state.end_date,
            item_photo: this.state.url,
            status: this.state.status,
            category_id : this.state.category_id
        }

        this.props.dispatch({
            type: 'CREATE_AUCTION',
            payload: {
                user_id: this.state.user_id,
                title: this.state.title,
                item_condition: this.state.item_condition,
                item_description: this.state.item_description,
                quantity: this.state.quantity,
                start_bid: this.state.start_bid,
                max_bid: this.state.max_bid,
                min_bid: this.state.min_bid,
                bids_multiply: this.state.bids_multiply,
                start_date: this.state.start_date,
                end_date: this.state.end_date,
                item_photo: this.state.url,
                status: this.state.status,
                category_id : this.state.category_id
            }
            
        })
        console.log(payload)

        request
            .post('/auctions', payload)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            }) 
                
    }
    onSuccess = (result) => {
        this.setState({
          url: result.filesUploaded[0].url
        })
        // console.log('result', this.state.url)
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
                                <Label for="closingdate">Closing date</Label>
                                {/* <Input type="date" name="closingdate" id="closingdate" placeholder="" /> */}
                                <Input
                                    onChange={this.handleChange}
                                    type="date"
                                    name="end_date"
                                    id="end_date"
                                    placeholder="Closing Date"
                                />
                            </FormGroup>
                            {/* <FormGroup>
                                <Label for="closingtime">Closing Time</Label>
                                <Input type="time" name="closingtime" id="closingtime" placeholder="" />
                            </FormGroup> */}
                            <FormGroup>
                                <Label for="item_condition">
                                    Item Condition
                                </Label>
                                {/* <Input type="select" name="itemcondition" id="itemcondition">
                                    <option>New</option>
                                    <option>Refurbished</option>
                                    <option>Used - Like New</option>
                                    <option>Used - Very Good</option>
                                    <option>Used - Good</option>
                                    <option>Unacceptable</option>
                                </Input> */}
                                <Input
                                    onChange={this.handleChange}
                                    type="text"
                                    name="item_condition"
                                    id="item_condition"
                                    placeholder="Item Condition"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="bidincrement">
                                    Bid Increment (IDR.)
                                </Label>

                                {/* <Input type="select" name="bidincrement" id="bidincrement">
                                    <option>5000</option>
                                    <option>10000</option>
                                    <option>20000</option>
                                    <option>50000</option>
                                    <option>100000</option>
                                    <option>1000000</option>
                                    <option>5000000</option>
                                    <option>10000000</option>
                                </Input> */}
                                <Input
                                    onChange={this.handleChange}
                                    type="text"
                                    name="bids_multiply"
                                    id="bids_multiply"
                                    placeholder="Bid Increment"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="itemdesc">Item Description</Label>
                                <Input type="textarea" name="text" id="exampleText" />
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
