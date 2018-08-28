import React from 'react'
import { Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap'

import LelangLogo from './../Assets/lelangbuana.png'


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
                        <img src={LelangLogo} className="img-fluid" alt="Lelangbuana"></img>
                    </NavbarBrand>           
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link class="btn" to="/login">Login</Link>
                            </NavItem>
                            <NavItem >
                                <Link class="btn" to="/reg">Register</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>              
                </Navbar>
            </div>
        )
    }
}

export default NavBar