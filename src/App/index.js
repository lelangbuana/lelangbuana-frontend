import React, { Component } from 'react'
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom'

import NavBar from '../Components/NavBar'
import Home from '../Home'
import Login from '../Login'
import Register from '../Register'
import ItemDetail from '../ItemDetail'
import MyAuction from '../Components/MyAuction'
import MyBid from '../Components/MyBid'
import MakeAuction from '../MakeAuction'



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
                        <Route path="/item" component={ItemDetail} />
                        <Route path="/create" component={MakeAuction}/>

                    </div> 
                </Switch>

            </Router>
        )
    }
}

export default App
