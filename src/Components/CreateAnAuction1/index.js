import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ReactFilestack from 'filestack-react'
import DatePicker from 'react-datepicker'
import { BrowserRouter as Link, Redirect } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import moment from 'moment'


import 'react-datepicker/dist/react-datepicker.css';


import {
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


const CustomInput = props => (
<Input onClick={props.onClick} value={props.date.format('DD/MM/YYYY HH:mm')} />);

class CreateAnAuction1 extends Component {
    constructor (props) {
        super(props)
        this.state = {
        success : false,
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
        selectedFile : null,
        redirectToReferrer : false
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
    
    // toggle(){
    //     this.setState({
    //         modal: !this.state.modal
    //       });
    // }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()

        // this.setState({
        //     modal: !this.state.modal
        //   })

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
                window.alert('Create Auction Success');
                this.setState({success: true})
                console.log("Message: ", response)
            })
            .catch(error => {
                window.alert(`${error.response.data.message}`);
                
                console.log(error)
            }) 
                
    }

    onSuccess = (result) => {
        this.setState({
          url: result.filesUploaded[0].url
        })
        console.log(result)
      }

    onError = (error) => {
        console.error('error', error);
    } 

    

    render() {

       
        // let  modals = (
        // <div>
        // {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
        //     <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        //         <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
        //         <ModalBody>
        //             Create Auction Success
        //         </ModalBody>
        //         <ModalFooter>
        //         <Link to="/myauction"><Button color="primary" onClick={this.toggle}>OK</Button>{' '}</Link>
        //             {/* <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
        //         </ModalFooter>
        //     </Modal>
        // </div>)

        if (this.state.success){
            return (
                <Redirect to={'/'}/>
            )
        } else {
        return (
            <Container>
                <Row>
                    <Col lg="8">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label sm={3} for="title">Title</Label>
                                <Col sm={9}>
                                <Input
                                    onChange={this.handleChange}
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Auction Title"
                                />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={3} for="quantity">Quantity</Label>
                                <Col sm={5}>
                                <Input
                                    onChange={this.handleChange}
                                    type="number"
                                    name="quantity"
                                    id="quantity"
                                    placeholder="Quantity"
                                    min = '1'
                                />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={3} for="minbid">Min. Bid Price</Label>
                                <Col sm={5}>
                                <Input
                                    onChange={this.handleChange}
                                    type="number"
                                    name="min_bid"
                                    id="min_bid"
                                    placeholder="Min Bid"
                                    min = '1'
                                />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={3} for="maxbid">Max. Bid Price</Label>
                                <Col sm={5}>
                                <Input
                                    onChange={this.handleChange}
                                    type="number"
                                    name="max_bid"
                                    id="max_bid"
                                    placeholder="Max Bid"
                                    min = '1'
                                />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={3} for="startdate">Start date</Label> 
                                <Col sm={5}>
                                <DatePicker
                                    name="start_date"
                                    id="start_date"
                                    selected={this.state.start_date}
                                    dateFormat="ll"
                                    customInput={<Form ><CustomInput date={this.state.start_date}/></Form>}
                                />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={3} for="closingdate">Closing date</Label>                
                                <Col sm={5}>
                                <DatePicker
                                    name="end_date"
                                    id="end_date"
                                    selected={this.state.end_date}
                                    onChange={this.handleChangeDate}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={30}
                                    dateFormat="lll"
                                    timeCaption="time"
                                    customInput={<Form ><CustomInput date={this.state.end_date}/></Form>}
                                />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={3} for="item_condition">
                                    Item Condition
                                </Label>
                                <Col sm={5}>
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
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={3} for="bidincrement">
                                    Bid Increment (IDR )
                                </Label>
                                <Col sm={5}>
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
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={3} for="itemdesc">Item Description</Label>
                                <Col sm={9}>
                                <Input 
                                onChange={this.handleChange}
                                type="textarea" 
                                name="item_description" 
                                id="item_description"
                                placeholder="Maximum 300 Character"/>
                                </Col>
                            </FormGroup>
                        <FormGroup row>
                            <Label sm={3} for="image">
                            Image : 
                            </Label>
                            <Col sm={9}>
                            <ReactFilestack
                                apikey= {keys.filestackKey}
                                buttonText="Upload"
                                buttonClass="ui medium button gray"
                                options={options}
                                onSuccess={this.onSuccess}
                                onError={this.onError}
                                />
                            </Col>
                        </FormGroup>
                            <Button style={styles.button} onClick={this.props.handleSubmit} block>Submit</Button>
                            
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
        }
    }
}

export default connect(mapStateToProps)(CreateAnAuction1)
