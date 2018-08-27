import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap'


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
                    <NavbarBrand href="/" >
                        <img src={require('./../Assets/lelangbuana.png')} class="img-fluid" alt="Lelangbuana"></img>
          
                    </NavbarBrand>
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
                </Navbar>
            </div>
        )
  }
}

export default NavBar