import React, {Component} from "react";
import './Wishlist.css';

const wishlist = [
  {
    "id": 1234567,
    "name": "Nintendo Switch",
    "img_url": "https://images-na.ssl-images-amazon.com/images/I/41UY4Pnw0SL._AC_SX430_.jpg",
    "price": 299,
    "descr": "Quiero un switch T.T",
    "date": "25 Dic 2018",
    "item_url": "https://www.amazon.com/Nintendo-Switch-Gray-Joy/dp/B01LTHP2ZK?th=1"
  },{
    "id": 1237,
    "name": "Nioh",
    "img_url": "https://images-na.ssl-images-amazon.com/images/I/51UehEnXjeL._AC_.jpg",
    "price": 19,
    "descr": "Quiero un switch T.T",
    "date": "25 Dic 2018",
    "item_url": "https://www.amazon.com/Nioh-PlayStation-4/dp/B01MRKF099/ref=pd_sim_63_6?_encoding=UTF8&pd_rd_i=B01MRKF099&pd_rd_r=65b5224a-bb99-11e8-8b29-77fe1a29c361&pd_rd_w=gywsr&pd_rd_wg=dLL3w&pf_rd_i=desktop-dp-sims&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=56838e6b-66d4-41e0-a762-743f1a1a628a&pf_rd_r=E93GZ7TBWVN41C0Z1DDY&pf_rd_s=desktop-dp-sims&pf_rd_t=40701&psc=1&refRID=E93GZ7TBWVN41C0Z1DDY"
  },{
    "id": 1234,
    "name": "The Legend of Zelda: Breath of the Wild",
    "img_url": "https://images-na.ssl-images-amazon.com/images/I/51Ox7m6-OIL._AC_.jpg",
    "price": 57.27,
    "descr": "Quiero un switch T.T",
    "date": "25 Dic 2018",
    "item_url": "https://www.amazon.com/gp/product/B01MS6MO77/ref=pd_rhf_se_s_rtpb1_1_4?ie=UTF8&pd_rd_i=B01MS6MO77&pd_rd_r=QBAVGT1XXT55P2AQFAJ0&pd_rd_w=rb69Q&pd_rd_wg=dtH8w&refRID=QBAVGT1XXT55P2AQFAJ0&th=1"
  }
]

//
//
//
// $ 19.99
// Nioh!!!
// 25 Nov 2018

//
//
//
// $ 57.27
// Zelda
// 25 Dic 2018
//



class WishlistContainer extends Component {
  render() {
    return (
      <div>
        <h1>Woop woop</h1>
        <WishList wishlist={wishlist}/>
      </div>
    )
  }
}

function WishList(props) {
  return (
    <div className="container">
      {props.wishlist.map(item =>
        <WishlistItem id={item.id} name={item.name} img_url={item.img_url} price={item.price} descr={item.desc}
        date={item.date} item_url={item.item_url}/>
      )}
    </div>
  )
}

class WishlistItem extends Component {
  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
        <img ref="image" src={this.props.img_url} alt={"wishlist item"}/>
        <h2>${this.props.price}</h2>
        <h3>{this.props.descr}</h3>
        <h4>{this.props.date}</h4>
        <a href={this.props.item_url}>{this.props.name} para Aldo ;)</a>
        <div>
          <button>Comprar para Aldo</button>
        </div>
      </div>
    )
  }
}

export default WishlistContainer;
