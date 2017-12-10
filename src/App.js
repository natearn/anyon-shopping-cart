import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Cart from './Cart.js'

const dummyData = {
    title: "A Title",
    products: [1,2,3,4].map(id => ({
        id: id,
        name: "Product " + id,
        comment: "This is a product comment that is long enough to exceed the size of its container.",
        price: 12.50,
        tax: 0.11,
    })),
    add: () => console.log("ADD"),
    remove: ({name}) => console.log("REMOVE " + name),
    clear: () => console.log("CLEAR"),
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Cart {...dummyData} />
      </div>
    );
  }
}

export default App;
