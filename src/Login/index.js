import React from 'react'
import { Button, Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap'
import axios from 'axios'

const request = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000',
    timeout: 5000,
    headers: { Authorization: '' }
})

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            email:"",
            password:""
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
        // console.log(this.state)  
      }

      handleSubmit = event => {
        event.preventDefault()
        request
        .post(`/users/login`)
        console.log(this.state)
      }

    render() {
        return (
            <div>
                <Container fluid="true">
                    <Row>
                        <Col sm="12">
                            <Form sm="2" onSubmit={this.handleSubmit}>
                                <FormGroup >
                                    <Label for="Username">Username</Label>
                                    {/* <Input type="email" name="email" id="email" placeholder="Your Email" onChange={this.onChange}/> */}
                                                    <Input
                                        onChange={this.handleChange}
                                        type="username"
                                        name="username"
                                        id="username"
                                        placeholder="Your Username"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="Password">Password</Label>
                                    {/* <Input type="password" name="password" id="Password" placeholder="Your Password" onChange={this.onChange}/> */}
                                    <Input
                                    onChange={this.handleChange}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                />
                                </FormGroup>
                        <Button type="submit" color="primary">Login</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}