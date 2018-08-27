import React, { Component } from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import ButtonModern from '../ButtonModern'
import NavBar from '../NavBar'
import Header from '../Header'
import CardAuction from '../CardAuction'
import Categories from '../Categories'
import Footer from '../Footer'

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
                                <CardAuction title="Car"/>
                                <CardAuction title="Motorcycle"/>
                                <CardAuction title="House"/>
                                <CardAuction title="Clothes"/>
                                <CardAuction title="Sneaker"/>
                                <CardAuction title="Jewelry"/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <Footer/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
