import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WishlistContainer from './components/Wishlist.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My wishlist</h1>
        </header>
        <body>
          <WishlistContainer/>
        </body>
      </div>
    );
  }
}

export default App;
