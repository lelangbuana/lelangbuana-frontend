import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'

import LelangLogo from '../Assets/lelangbuana.svg'

const styles = {
    navbar: {
        backgroundColor: '#011D55'
    }
}

// const AuthButton = withRouter(({ history }) => (
//     localStorage.getItem('token') ? (
//         <p>
//         Welcome! <button onClick={() => {
//                 history.push('/')
//                 localStorage.removeItem('token')
//                 localStorage.removeItem('user_id')
//             }}>Sign out</button>
//         </p>
//     ) : (
//         <p>You are not logged in.</p>
//     )
// ))

class NavBar extends React.Component {
    render() {
        let button,register
        if (localStorage.getItem('token')) {
            
            button = <NavItem>
                <NavLink className="text-white btn" to="/logout" onClick={() => {
                    localStorage.removeItem('token')
                    localStorage.removeItem('user_id')
                }}>
            Logout
                </NavLink>
            </NavItem>
        } else {
            button = <NavItem>
                <NavLink className="text-white btn" to="/login">
            Login
                </NavLink>
            </NavItem>
            register = <NavItem>
                <NavLink className="text-white btn" to="/register">
                Register
                </NavLink>
            </NavItem>
        }
      
        return (
            <div>
                <Navbar style={styles.navbar} expand="md">
                    <NavbarBrand href="/">
                        <img
                            src={LelangLogo}
                            className="img-fluid"
                            alt="Lelangbuana"
                        />
                    </NavbarBrand>

                    <Nav className="ml-auto" navbar>
                        {button}
                        {register}
                        
                        <NavItem>
                            <NavLink className="text-white btn" to="/create">
                                Create Auction
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white btn" to="/myauction">
                                My Auction
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white btn" to="/mybid">
                                My Bid
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default NavBar
