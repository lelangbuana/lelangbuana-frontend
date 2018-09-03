import React,{Component} from 'react'
import { Button, Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap'
import { Redirect } from 'react-router-dom'
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


class Login extends Component {

    static get propTypes() {
        return {
          children: PropTypes.any,
          dispatch: PropTypes.any,
          login: PropTypes.object,
          message: PropTypes.string,
          user_id: PropTypes.number
        }
      }

      state = {
        email: '',
        password: '',
        user_id: 0,
        redirectToReferrer: false
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
              
              request
              .get(`/users/${this.state.username}`)
              .then((response) => {
                  console.log("state username : ", this.state.username)
                  const action = {
                      type: 'SET_ID',
                      payload: {
                          user_id: response.data.user.user_id
                        }
                    }
                    localStorage.setItem("user_id",response.data.user.user_id)
                    this.props.dispatch(action)
                    console.log(action);
                    console.log("user_id : ", response.data.user.user_id)
                    console.log("props user_id : ", this.props.user_id)
                    this.setState({redirectToReferrer: true})  
                
            })
            .catch(error=>{console.log(error)})
        })
        .catch(error=>{console.log(error)})

      }

    render() {
        const {from} = this.props.location.state || {from: { pathname: '/' }}
        const  redirectToReferrer  = this.state.redirectToReferrer
        
        if (redirectToReferrer === true) {
            return (<Redirect to = {from} />)
          }
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

const mapStateToProps = state => {
    return {
      user_id: state.user.user_id,
      login: state.user.login,
      username: state.user.username
    }
}


export default connect(mapStateToProps)(Login)

