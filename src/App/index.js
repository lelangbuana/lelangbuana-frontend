import React, { Component } from 'react'
import { BrowserRouter as Router,Switch, Route, Link, NavLink } from 'react-router-dom'
import CardAuction from './../CardAuction'

// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
import {
    Container,
    Row,
    Col
} from 'reactstrap'


import NavBar from '../NavBar'
import loginRegister from '../LoginRegister'
import Home from '../Home'


class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <div className="App">
                        <NavBar/>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={loginRegister} />
                    </div> 
                </Switch>

            </Router>
        )
    }
}

export default App
