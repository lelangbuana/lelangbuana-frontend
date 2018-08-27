import React, { Component } from 'react';
import ButtonModern from '../ButtonModern'
import NavBar from '../NavBar'
import Header from '../Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <NavBar/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ButtonModern/>
      </div>
    );
  }
}

export default App;
