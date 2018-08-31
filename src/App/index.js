import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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
    body: {
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column'
    },

    main: {
        flex: '1'
    }
}

const initialState = {
    user: {
        user_id: '',
        username: '',
        email: '',
        password: '',
        register: {},
        mybid: {},
        auction: {},
        myauction: {},
        login: {},
        token: '',
        title: '',
        src: '',
        description: '',
        name: '',
        categories: [],
        islogin: 'false'
    },
    auction: {
        auction_id: '',
        title: '',
        item_condition: '',
        item_description: '',
        quantity: 0,
        start_bid: 0,
        max_bid: 0,
        min_bid: 0,
        bids_multiply: 0,
        start_date: null,
        end_date: null,
        item_photo: '',
        status: '',
        created_at: '',
        user_id: 0
    },
    bids: {
        // bid_id: '',
        // bids_nominal: '',
        // auction_id: '',
        // user_id: ''
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case 'LOGIN': {
        return {
            user: {
                ...state.user,
                login: action.payload.login,
                token: action.payload.token
            }
        }
    }
    case 'REGISTER': {
        return {
            user: {
                ...state.user,
                register: action.payload
            }
        }
    }
    case 'CLICKED': {
        return {
            user: {
                ...state.user,
                title: action.payload.title,
                src: action.payload.src,
                description: action.payload.description
            }
        }
    }
    case 'AUCTION': {
        return {
            user: {
                ...state.user,
                auction: action.payload
            }
        }
    }
    case 'DETAIL': {
        return {
            user: {
                ...state.auction,
                auction: action.payload
            }
        }
    }
    default:
        return state
    }
}

const store = createStore(reducer)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App" style={styles.body}>
                        <div>
                            <NavBar />
                        </div>
                        <div style={styles.main}>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/login" component={Login} />
                                <Route path="/reg" component={Register} />
                                <Route
                                    path="/auctions/:id"
                                    component={ItemDetail}
                                />
                                <Route
                                    exact
                                    path="/auctions"
                                    component={ItemDetail}
                                />
                                <Route path="/create" component={MakeAuction} />
                                <Route
                                    path="/mybid"
                                    component={MyBidDashboard}
                                />
                                <Route
                                    path="/myauction"
                                    component={MyAuctionDashboard}
                                />
                            </Switch>
                        </div>
                        <div>
                            <Footer />
                        </div>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App
