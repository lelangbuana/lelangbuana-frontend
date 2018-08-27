import React from 'react'
import {
    Container,
    Row,
    Col,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'
import SearchBar from './../SearchBar/index'


class NavBar extends React.Component {
    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.state = {
            isOpen: false
        }
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <Container>
                        <Row>
                            <Col xs="6" sm="4">
                                <NavbarBrand href="/" >
                                    <img src={require('./../Assets/lelangbuana.png')} class="img-fluid" alt="Lelangbuana"></img>
                                </NavbarBrand>
                            </Col>
                            
                            <Col xs="6" >
                                <NavbarToggler onClick={this.toggle} />
                                <Collapse isOpen={this.state.isOpen} navbar>
                                    <Nav className="ml-auto" navbar>
                                        <NavItem>
                                            <NavLink href="/SignIn/">Sign In</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="/Register">Register</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="/Help">Help</NavLink>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="8">
                                <SearchBar/>
                            </Col>
                        </Row>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default NavBar