import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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

class Button extends Component {
    handleClick = () => {
        document.bgColor = "#DF000F"
    };

    render() {
        return <button  onClick={this.handleClick}>Cambiar fondo</button>
    }
}


class WishlistContainer extends Component {
  render() {
    return (
        <div>
          <h1>Woop woop</h1>
          <div className="container">
            <WishlistItem name="Nintendo Switch"
                          imgurl="https://images-na.ssl-images-amazon.com/images/I/41UY4Pnw0SL._AC_SX430_.jpg"
                          price="$ 299"
                          descr="Quiero un Nintendo Switch!!!"
                          date="25 Dic 2018"
                          url="https://www.amazon.com/Nintendo-Switch-Gray-Joy/dp/B01LTHP2ZK?th=1"
            />
            <WishlistItem name="Nintendo Switch"
                            imgurl="https://images-na.ssl-images-amazon.com/images/I/41UY4Pnw0SL._AC_SX430_.jpg"
                            price="$ 299"
                            descr="Quiero un Nintendo Switch!!!"
                            date="25 Dic 2018"
                            url="https://www.amazon.com/Nintendo-Switch-Gray-Joy/dp/B01LTHP2ZK?th=1"
          />
            <WishlistItem name="Nintendo Switch"
                          imgurl="https://images-na.ssl-images-amazon.com/images/I/41UY4Pnw0SL._AC_SX430_.jpg"
                          price="$ 299"
                          descr="Quiero un Nintendo Switch!!!"
                          date="25 Dic 2018"
                          url="https://www.amazon.com/Nintendo-Switch-Gray-Joy/dp/B01LTHP2ZK?th=1"
            />
            <WishlistItem name="Nintendo Switch"
                          imgurl="https://images-na.ssl-images-amazon.com/images/I/41UY4Pnw0SL._AC_SX430_.jpg"
                          price="$ 299"
                          descr="Quiero un Nintendo Switch!!!"
                          date="25 Dic 2018"
                          url="https://www.amazon.com/Nintendo-Switch-Gray-Joy/dp/B01LTHP2ZK?th=1"
            />
            <WishlistItem name="Nintendo Switch"
                          imgurl="https://images-na.ssl-images-amazon.com/images/I/41UY4Pnw0SL._AC_SX430_.jpg"
                          price="$ 299"
                          descr="Quiero un Nintendo Switch!!!"
                          date="25 Dic 2018"
                          url="https://www.amazon.com/Nintendo-Switch-Gray-Joy/dp/B01LTHP2ZK?th=1"
            />
            <WishlistItem name="Nintendo Switch"
                          imgurl="https://images-na.ssl-images-amazon.com/images/I/41UY4Pnw0SL._AC_SX430_.jpg"
                          price="$ 299"
                          descr="Quiero un Nintendo Switch!!!"
                          date="25 Dic 2018"
                          url="https://www.amazon.com/Nintendo-Switch-Gray-Joy/dp/B01LTHP2ZK?th=1"
            />
          </div>

        </div>
      )
    }
}

class WishlistItem extends Component {
  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
        <img ref="image" src={this.props.imgurl}/>
        <h2>{this.props.price}</h2>
        <h3>{this.props.descr}</h3>
        <h4>{this.props.date}</h4>
        <a href={this.props.url}>{this.props.name} para Aldo ;)</a>
      </div>
    )
  }
}


export default App;




//Nintendo Switch
// "https://images-na.ssl-images-amazon.com/images/I/41UY4Pnw0SL._AC_SX430_.jpg"
//$ 299
//Quiero un nintendo switch!!
//25 Dic 2018
// https://www.amazon.com/Nintendo-Switch-Gray-Joy/dp/B01LTHP2ZK?th=1

//Nioh
//"https://images-na.ssl-images-amazon.com/images/I/51UehEnXjeL._AC_.jpg"
//$ 19.99
//Nioh!!!
//25 Nov 2018
//https://www.amazon.com/Nioh-PlayStation-4/dp/B01MRKF099/ref=pd_sim_63_6?_encoding=UTF8&pd_rd_i=B01MRKF099&pd_rd_r=65b5224a-bb99-11e8-8b29-77fe1a29c361&pd_rd_w=gywsr&pd_rd_wg=dLL3w&pf_rd_i=desktop-dp-sims&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=56838e6b-66d4-41e0-a762-743f1a1a628a&pf_rd_r=E93GZ7TBWVN41C0Z1DDY&pf_rd_s=desktop-dp-sims&pf_rd_t=40701&psc=1&refRID=E93GZ7TBWVN41C0Z1DDY

//The Legend of Zelda: Breath of the Wild
//"https://images-na.ssl-images-amazon.com/images/I/51Ox7m6-OIL._AC_.jpg"
//$ 57.27
//Zelda
//25 Dic 2018
//https://www.amazon.com/gp/product/B01MS6MO77/ref=pd_rhf_se_s_rtpb1_1_4?ie=UTF8&pd_rd_i=B01MS6MO77&pd_rd_r=QBAVGT1XXT55P2AQFAJ0&pd_rd_w=rb69Q&pd_rd_wg=dtH8w&refRID=QBAVGT1XXT55P2AQFAJ0&th=1

