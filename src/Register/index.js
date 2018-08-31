import React from 'react'
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'
import axios from 'axios'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const styles = {
    space: {
        justifyContent: 'center',
        //    display : 'flex',
        marginTop: '2rem',
        marginBottom: '5rem'
    }
}

const request = axios.create({
    baseURL: 'https://lelangbuana.herokuapp.com' || 'http://localhost:3000',
    timeout: 10000,
    headers: { Authorization: '' }
})

const mapStateToProps = state => {
    return {
        register: state.user.register
    }
}

class Register extends React.Component {
    static get propTypes() {
        return {
            children: PropTypes.any,
            dispatch: PropTypes.any,
            register: PropTypes.object
        }
    }

    state = {
        username: '',
        password: '',
        profile_photo: 'photo',
        phone_number: '123',
        email: '',
        first_name: '',
        last_name: '',
        address: '',
        city: '',
        province: '',
        country: '',
        zip_code: '',
        id_card: '',
        status: 'active'
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        const payload = {
            username: this.state.username,
            password: this.state.password,
            profile_photo: 'photo',
            phone_number: this.state.phone_number,
            email: this.state.email,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            address: this.state.address,
            city: this.state.city,
            province: this.state.province,
            country: this.state.country,
            zip_code: this.state.zip_code,
            id_card: this.state.id_card,
            status: this.state.status
        }
        this.props.dispatch({
            type: 'REGISTER',
            payload: {
                username: this.state.username,
                password: this.state.password,
                profile_photo: 'photo',
                phone_number: this.state.phone_number,
                email: this.state.email,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                address: this.state.address,
                city: this.state.city,
                province: this.state.province,
                country: this.state.country,
                zip_code: this.state.zip_code,
                id_card: this.state.id_card,
                status: this.state.status
            }
        })

        request
            .post('/users/register', payload)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        console.log(payload)
    }

    render() {
        return (
            <div style={styles.space}>
                <Form onSubmit={this.handleSubmit}>
                    <Container>
                        <Row inline>
                            <Col sm="6">
                                <FormGroup>
                                    <Label for="Username">Username</Label>
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
                                    <Input
                                        onChange={this.handleChange}
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="Email">Email</Label>
                                    <Input
                                        onChange={this.handleChange}
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="FirstName">First Name</Label>
                                    <Input
                                        onChange={this.handleChange}
                                        type="text"
                                        name="first_name"
                                        id="first_name"
                                        placeholder="First Name"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="LastName">Last Name</Label>
                                    <Input
                                        onChange={this.handleChange}
                                        type="text"
                                        name="last_name"
                                        id="last_name"
                                        placeholder="Last Name"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="Address">Address</Label>
                                    <Input
                                        onChange={this.handleChange}
                                        type="text"
                                        name="address"
                                        id="address"
                                        placeholder="Address"
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm="6">
                                <FormGroup>
                                    <Label for="City">City</Label>
                                    <Input
                                        onChange={this.handleChange}
                                        type="text"
                                        name="city"
                                        id="city"
                                        placeholder="City"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="State/Province">
                                        State/Province
                                    </Label>
                                    <Input
                                        onChange={this.handleChange}
                                        type="text"
                                        name="province"
                                        id="province"
                                        placeholder="State/Province"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="Country">Country</Label>
                                    <Input
                                        onChange={this.handleChange}
                                        type="text"
                                        name="country"
                                        id="country"
                                        placeholder="Country"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="Postalcode">
                                        Zip/Postal Code
                                    </Label>
                                    <Input
                                        onChange={this.handleChange}
                                        type="number"
                                        name="zip_code"
                                        id="zip_code"
                                        placeholder="Postal Code"
                                        minLength="5"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="IDnumber">ID number</Label>
                                    <Input
                                        onChange={this.handleChange}
                                        type="number"
                                        name="id_card"
                                        id="ide_card"
                                        placeholder="Your ID Number"
                                        minLength="5"
                                        min="1"
                                    />
                                </FormGroup>
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Register)
