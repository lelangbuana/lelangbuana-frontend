import React from 'react'
import { Button, Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap'
import axios from 'axios'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const request = axios.create({
    baseURL: "https://lelangbuana.herokuapp.com" || 'http://localhost:3000',
    timeout: 10000,
    headers: { Authorization: '' }
})


const styles ={
    space : {
        marginTop:'12rem',
       justifyContent : 'center',
       display : 'flex',
       textAlign : 'center'
    },
    button : {
        width : '100px'
    }

}
const mapStateToProps = state => {
    return {
      login: state.user.login
    }
}

class Login extends Component {

    static get propTypes() {
        return {
          children: PropTypes.any,
          dispatch: PropTypes.any,
          login: PropTypes.object,
          message: PropTypes.string
        }
      }

      state = {
        email: '',
        password: ''
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
            this.props.dispatch({
                type: 'LOGIN',
                payload: {
                  login: payload,
                  token: response.data.token || ''
                }
              })
              localStorage.setItem("token",response.data.token)
            console.log(this.props)
            console.log(response.data.token)
        })
        .catch(error=>{console.log(error)})
        console.log(payload)
      }

    render() {
        return (
            <div >
                <Container style={styles.space}>
                    <Row>
                        <Col>
                            <Form onSubmit={this.handleSubmit}>
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
                        <Button style={styles.button} type="submit" color="primary">Login</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


export default connect(mapStateToProps)(Login)

