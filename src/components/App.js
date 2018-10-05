import React, { Component } from 'react';
import logo from '../logo.png';
import '../css/App.css';
import AllPost from './AllPost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PrivateApp/>
      </div>
    );
  }
}

class PrivateApp extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="header-left-container">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">My Wishlist</h1>
          </div>
          <div className="header-right container">
            <button className="publish-button">Share my Wishlist</button>
          </div>
        </header>
        <div className="content">
          <AllPost/>
        </div>
      </div>
    );
  }
}

export default App;
