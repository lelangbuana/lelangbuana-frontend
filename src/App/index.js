import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom'

import NavBar from '../Components/NavBar'
import Home from '../Home'
import Login from '../Login'
import Register from '../Register'
import ItemDetail from '../ItemDetail'
import MyAuction from '../Components/MyAuction'
import MyBid from '../Components/MyBid'
import MakeAuction from '../MakeAuction'

const initialState = {
    user: {
        user_id:'',
        username:'',
        email:'',
        password:'',
        register: {},
        mybid: {},
        auction:{},
        myauction: {},
        login: {},
        token: '',
        title:'',
        src:'',
        description:'',
        name:'',
        categories:'',
        islogin:'false'
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
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
                description: action.payload.description,
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
                    <Switch>
                        <div className="App">
                            <NavBar/>
                            <Route exact path="/" component={Home} />
                            <Route path="/login" component={Login} />
                            <Route path="/reg" component={Register} />
                            <Route path="/item/:slug" component={ItemDetail} />
                            <Route path="/create" component={MakeAuction}/>

                        </div> 
                    </Switch>

                </Router>

            </Provider>
        )
    }
}

export default App
