import React, {Component} from "react";
import { connect } from 'react-redux';
import '../css/Post.css'

class Post extends Component {
  render() {
    return (
      <div className="post-item">
        <div className="left-container">
          <img className="post-image" ref={this.props.post.product_url} src={this.props.post.image_url} alt={"wishlist item"} />
          <a className="post-url" href={this.props.post.product_url}>{this.props.post.name} page</a>
        </div>
        <div className="right-container">
          <h1 className="post-name">{this.props.post.name}</h1>
          <h2 className="post-descr">{this.props.post.description}</h2>
          <h2 className="post-price">$ {this.props.post.price}</h2>

          <div className="button-container">
            <button className="post-edit"
                    onClick={()=>this.props.dispatch({type:'EDIT_POST', id:this.props.post.id})}>Edit</button>
            <button className="post-delete"
                    onClick={()=>this.props.dispatch({type:'DELETE_POST', id:this.props.post.id})}>Delete</button>
          </div>

        </div>
      </div>
    );
  }
}

export default connect()(Post);