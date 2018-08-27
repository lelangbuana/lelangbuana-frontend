import React, { Component } from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import ButtonModern from '../ButtonModern'
import NavBar from '../NavBar'
import Header from '../Header'
import CardAuction from '../CardAuction'
import Categories from '../Categories'

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
                            <Categories name="Electronic"/>
                            <Categories name="Craft"/>
                            <Categories name="Furniture"/>
                            <Categories name="Hobby"/>
                            <Categories name="Woman's Need"/>
                        </div>
                        <div class="col-sm">
                            <div class="row">
                                <CardAuction title="Macbook"/>
                                <CardAuction title="iPhone"/>
                                <CardAuction title="PC"/>
                            </div>

                        </div>
            
            
                    </div>
                </div>
            </div>
        )
    }
}

export default App
