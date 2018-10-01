import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import PostForm from './PostForm';
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
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Wishlist</h1>
        </header>
        <div className="content">
          <PostForm/>
          <AllPost/>
        </div>
      </div>
    );
  }
}

export default App;
