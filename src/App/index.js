import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../Home'
import Login from '../Login'
import Register from '../Register'
import ItemDetail from '../ItemDetail'
import MyBidDashboard from '../MyBidDashboard'
import MakeAuction from '../MakeAuction'
// import MyAuctionDashboard from '../MyAuctionDashboard'
import Debug from '../Debug'
import PrivateRoute from '../PrivateRoute'

import NavBar from '../Components/NavBar'
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
    message: '',
    user: {
        user_id: 0,
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
        islogin: false
    },
    auction: {
        auction_id: 0,
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
        user_id: 0,
        highest_bid:0,
        bids:0,
        winner: ''
    },
    bidData: {
        bid_id: 0,
        bids_nominal: 0,
        auction_id: 0,
        user_id: 0
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case 'LOGIN': {
        return {
            ...state,
            user: {
                ...state.user,
                login: action.payload.login,
                token: action.payload.token
            }
        }
    }
    case 'SET_ID': {
        return {
            ...state,
            user: {
                ...state.user,
                user_id: action.payload.user_id
            }
        }
    }
    case 'REGISTER': {
        return {
            ...state,
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
    case 'SET_AUCTION_STATE': {
        return {
            ...state,
            auction:{
                ...state.auction,
                auction_id: action.payload.auction_id,
                title: action.payload.title,
                item_condition: action.payload.item_condition,
                item_description : action.payload.item_description,
                quantity: action.payload.quantity,
                start_bid: action.payload.start_bid,
                max_bid: action.payload.max_bid,
                min_bid: action.payload.min_bid,
                bids_multiply: action.payload.bids_multiply,
                start_date: action.payload.start_date,
                end_date: action.payload.end_date,
                item_photo: action.payload.item_photo,
                status: action.payload.status,
                user_id: action.payload.user_id

            },
            user:{
                ...state.user,
                username : action.payload.username,
                phone_number: action.payload.phone_number,
                address: action.payload.address,

                
            }
        }
    }
    case 'SET_REMAINING_TIME': {
        return {
            ...state,
            auction:{
                ...state.auction,
                start_date: action.payload.start_date,
                end_date: action.payload.end_date
            }
        }
    }
    case 'UPDATE_BID_AUCTION': {
        return {
            ...state,
            auction: {
                
                ...state.auction,
                highest_bid: action.payload.highest_bid
            }
            
        }
    }
    case 'UPDATE_BID_AMOUNT': {
        return {
            ...state,
            auction: {
                
                ...state.auction,
                bids: action.payload.bids
            }
            
        }
    }
    case 'GET_WINNER': {
        return {
            ...state,
            auction: {
                
                ...state.auction,
                winner: action.payload.winner
            }
            
        }
    }
    case 'GET_DETAIL': {
        return {
            product: {}
        }
    }
    case 'DEBUG_STORE': {
        return {
            ...state,
            message: 'Debug store: ' + action.payload.number
        }
    }
    case 'BID': {
        return {
            ...state,
            bidData: {
                ...state.bidData,
                bid_id:  action.payload.bid_id,
                bids_nominal: action.payload.bids_nominal,
                auction_id: action.payload.auction_id,
                user_id: action.payload.user_id
            }
        }
    }
    default:
        return state
    }
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)



class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App" style={styles.body}>
                        <div>
                            <NavBar />
                            {/* <AuthButton/> */}
                        </div>
                        <div style={styles.main}>
                            <Switch>
                                <Route exact path="/debug" component={Debug} />
                                <Route exact path="/" component={Home} />
                                <Route path="/login" component={Login} />
                                <Route path="/logout" component={Login} />
                                <Route path="/register" component={Register} />
                                <Route
                                    path="/auctions/:id"
                                    component={ItemDetail}
                                />
                                <Route
                                    exact
                                    path="/auctions"
                                    component={ItemDetail}
                                />
                                <PrivateRoute path="/create" component={MakeAuction} />
                                <PrivateRoute
                                    path="/mybid"
                                    component={MyBidDashboard}
                                />
                                {/* <PrivateRoute
                                    path="/myauction"
                                    component={MyAuctionDashboard}
                                /> */}
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
