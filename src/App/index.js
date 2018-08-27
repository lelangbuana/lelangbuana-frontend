import React, { Component } from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import ButtonModern from '../ButtonModern'
import NavBar from '../NavBar'
import Header from '../Header'
import CardAuction from '../CardAuction'

const initialState ={
    user: {
        name: 'newUser',
        token: ''
    }
}


class App extends Component {
    render() {
        return (
            <div className="App">
                <div class="container-fluid">
                    <NavBar/>
                    <div class="row">
                        <div class="col-sm-2">
              Categories
                        </div>
                        <div class="col-sm">
                            <div class="row">
                                <CardAuction/>
                                <CardAuction/>
                                <CardAuction/>
                            </div>

                        </div>
            
            
                    </div>
                </div>
            </div>
        )
  }
}

export default App
