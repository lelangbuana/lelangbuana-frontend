import React from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, 
    Button, Container, Row, Col, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap'
import classnames from 'classnames'

export default class LoginReg extends React.Component {
    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.state = {
            activeTab: '1'
        }
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            })
        }
    }
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '1' })}
                                        onClick={() => { this.toggle('1') }}
                                    >
              Login
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '2' })}
                                        onClick={() => { this.toggle('2') }}
                                    >
              Register
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    <Row>
                                        <Col sm="12">
                                            <Form sm="2">
                                                <FormGroup>
                                                    <Label for="Username">Username</Label>
                                                    <Input type="text" name="username" id="username" placeholder="Your Username" />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for="Password">Password</Label>
                                                    <Input type="password" name="password" id="Password" placeholder="Your Password" />
                                                </FormGroup>
                                            </Form>
                                        </Col>
                                        <Button type="submit" color="primary">Login</Button>{' '}
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row>
                                        <Col sm="6">
                                            <FormGroup>
                                                <Label for="Username">Username</Label>
                                                <Input type="text" name="username" id="username" placeholder="Your Username" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="Password">Password</Label>
                                                <Input type="password" name="password" id="password" placeholder="Your Password" />
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
                                        <Col sm="6">
                                            <FormGroup>
                                                <Label for="Address">Address</Label>
                                                <Input type="text" name="address" id="address" placeholder="Address" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="City">City</Label>
                                                <Input type="text" name="city" id="city" placeholder="City" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="State/Province">State/Province</Label>
                                                <Input type="text" name="stateprovince" id="stateprovince" placeholder="State/Province" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="Postalcode">Zip/Postal Code</Label>
                                                <Input type="number" name="zip" id="zip" placeholder="Your Username" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="exampleCustomFileBrowser">File Browser</Label>
                                                <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" />
                                            </FormGroup>
                                        </Col>
                                        <Button type="submit" color="primary">Submit</Button>{' '}
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}