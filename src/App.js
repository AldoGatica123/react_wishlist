import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Laboratorio 0</h1>
        </header>
          <Woop name="woop"/>
          <Button/>
      </div>
    );
  }
}

class Button extends Component {
    handleClick = () => {
        document.bgColor = "#DF000F"
    };

    render() {
        return <button  onClick={this.handleClick}>Cambiar fondo</button>
    }
}

//
// class btnButton extends Component {
//     handleClick = () => {
//         this.setState({
//             bgColor: 'blue'
//         })
//     };
//
//     render() {
//         return <button  onClick={this.handleClick}>Cambiar fondo</button>
//     }
// }


class Woop extends Component {
    render() {
        return <h1>Woop woop</h1>;
    }
}

export default App;
