import React, {Component} from "react";
import './Wishlist.css';

class WishlistContainer extends Component {
  render() {
    return (
      <div>
        <h1>Woop woop</h1>
        <div className="container">
          <WishlistItem name="yeye" imgurl="https://images-na.ssl-images-amazon.com/images/I/41UY4Pnw0SL._AC_SX430_.jpg" price="200"/>
          <WishlistItem name="yeye" imgurl="https://images-na.ssl-images-amazon.com/images/I/51Ox7m6-OIL._AC_.jpg" price="200"/>
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
        <img ref="image" src={this.props.imgurl} alt={"whatevs"}/>
        <h2>{this.props.price}</h2>
        <h3>{this.props.descr}</h3>
        <h4>{this.props.date}</h4>
        <a href={this.props.url}>{this.props.name} para Aldo ;)</a>
      </div>
    )
  }
}

export default WishlistContainer;
