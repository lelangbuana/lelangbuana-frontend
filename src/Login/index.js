import React from 'react'
import { Button, Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap'
import axios from 'axios'

const request = axios.create({
    baseURL: "https://lelangbuana.herokuapp.com" || 'http://localhost:3000',
    timeout: 10000,
    headers: { Authorization: '' }
})

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            username:"",
            password:"",
            islogin:"false"
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
      }
      

      handleSubmit = event => {
          event.preventDefault()
        const payload = {
            username: this.state.username,
            password: this.state.password
          }
        request
        .post('/users/login',payload)
        .then((response) => {
            let token = response.data.token
            this.setState({
                islogin: true,
                token:token
            });
            localStorage.setItem("token",token)
            console.log(this.state)
        })
        .catch(error=>{console.log(error)})
        console.log(payload)
      }

    render() {
        return (
            <div>
                <Container fluid>
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