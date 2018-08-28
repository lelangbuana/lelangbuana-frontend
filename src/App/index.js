import React, { Component } from 'react'
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom'

import NavBar from '../Components/NavBar'
import Home from '../Home'
import Login from '../Login'
import Register from '../Register'
import MyAuction from '../MyAuction'
import MyBid from '../MyBid'


class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <div className="App">
                        <NavBar/>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/reg" component={Register} />
                        <Route path="/myauction" component={MyAuction} />
                        <Route path="/mybid" component={MyBid} />
                    </div> 
                </Switch>

            </Router>
        )
    }
}

export default App
