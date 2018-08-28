import React from 'react'
import {Row, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap'
import axios from 'axios'


export default class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            countriesName : []
        }
    }


    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
            .then((res)=>{
                const countriesName = res.data.map(country => {
                    return country.name
                })
                this.setState({
                    countriesName
                })
                console.log(countriesName)          
            })
    }



    render(){
        return(
            <div>
                <Form >
                    <Row>
                        <Col sm="12">
                            <FormGroup>
                                <Label for="Username">Username</Label>
                                {/* <Input type="text" name="username" id="username" placeholder="Your Username" /> */}
                                <Input
                                    type="username"
                                    name="username"
                                    id="username1"
                                    placeholder="Your Username"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Password">Password</Label>
                                <Input type="password" name="password" id="password1" placeholder="Your Password" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Email">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="Email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="FirstName">First Name</Label>
                                <Input type="text" name="firstname" id="firstname" placeholder="First Name" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="LastName">Last Name</Label>
                                <Input type="text" name="lastname" id="lastname" placeholder="Last Name" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12">
                            <FormGroup>
                                <Label for="Address">Address</Label>
                                <Input type="text" name="address" id="address" placeholder="Address" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="City">City</Label>
                                <Input type="text" name="city" placeholder="City"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="State/Province">State/Province</Label>
                                <Input type="text" name="stateprovince" id="stateprovince" placeholder="State/Province" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Country">Country</Label>
                                <Input type="select" name="country" placeholder="Country"><option></option></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="Postalcode">Zip/Postal Code</Label>
                                <Input type="number" name="zip" id="zip" placeholder="Zip / Postal Code" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="IDnumber">ID number</Label>
                                <Input type="number" name="idnumber" id="idnumber" placeholder="Your ID Number" />
                            </FormGroup>
                        </Col>
                        <Button type="submit" color="primary">Submit</Button>
                    </Row>
                </Form>
            </div>
        )
    }
}