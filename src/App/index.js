import React, { Component } from 'react'
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom'

import NavBar from '../Components/NavBar'
import Home from '../Home'
import Login from '../Login'
import Register from '../Register'
import ItemDetail from '../ItemDetail'
import MyBidDashboard from '../MyBidDashboard'
import MakeAuction from '../MakeAuction'
import MyAuctionDashboard from '../MyAuctionDashboard'
import Footer from '../Components/Footer'

const styles = {
    body : {
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column'
    },

    main : {
        flex:'1'
    }
}

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <div className="App" style={styles.body}>
                        <div>
                            <NavBar/>
                        </div>
                        <div style={styles.main}>
                            <Route exact path="/" component={Home} />
                            <Route path="/login" component={Login} />
                            <Route path="/reg" component={Register} />
                            <Route path="/item" component={ItemDetail} />
                            <Route path="/create" component={MakeAuction}/>
                            <Route path="/mybid" component={MyBidDashboard}/>
                            <Route path="/myauction" component= {MyAuctionDashboard}/>
                        </div>
                        <div>
                            <Footer/>
                        </div>
                    </div> 
                </Switch>
            </Router>
        )
    }
}

export default App
