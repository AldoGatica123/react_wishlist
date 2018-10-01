import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import WishlistContainer from './components/PublicWishlist.js';
// import FooterContainer from "./components/MyFooter";
import PostForm from './components/PostForm';
import AllPost from './components/AllPost';


class App extends Component {
  render() {
    return (
      <div className="App">
        <PrivateApp/>
      </div>
    );
  }
}

// class PublicApp extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Aldo's wishlist</h1>
//         </header>
//         <body className="content">
//         <WishlistContainer/>
//         </body>
//         <FooterContainer/>
//       </div>
//     );
//   }
// }

class PrivateApp extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My wishlist</h1>
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
