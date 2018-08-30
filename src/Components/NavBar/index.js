import React from 'react'
import { NavLink } from 'react-router-dom'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap'

import LelangLogo from '../Assets/lelangbuana.svg'

const styles ={
    navbar : {
        backgroundColor : '#011D55'
    }

}

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar style={styles.navbar} expand="md">
                    <NavbarBrand href="/" >
                        <img src={LelangLogo} className="img-fluid" alt="Lelangbuana"></img>
                    </NavbarBrand>           

                    <Nav className="ml-auto" navbar >
                        <NavItem >
                            <NavLink className="text-white btn"  to="/login">Login</NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink className="text-white btn" to="/reg">Register</NavLink>
                        </NavItem> 
                        <NavItem >
                            <NavLink className="text-white btn" to="/item">Item</NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink className="text-white btn" to="/create">Create Auction</NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink className="text-white btn" to="/myauction">My Auction</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white btn" to="/mybid">My Bid</NavLink>
                        </NavItem>
                    </Nav>            

                </Navbar>
            </div>
        )
    }
}

export default NavBar