import React, {Component} from "react";
import { connect } from 'react-redux';
import '../css/Post.css'

class Post extends Component {
  render() {
    return (
      <div className="post-item">
        <h1>{this.props.post.name}</h1>
        <h2>{this.props.post.description}</h2>
        <h2>{this.props.post.price}</h2>
        <h2>{this.props.post.url}</h2>
        <h2>{this.props.post.date}</h2>

        <button
          onClick={()=>this.props.dispatch({type:'EDIT_POST',id:this.props.post.id})}>
          Edit</button>
        <br/>
        <br/>
        <button
          onClick={()=>this.props.dispatch({type:'DELETE_POST',id:this.props.post.id})}>
          Delete</button>
      </div>
    );
  }
}

export default connect()(Post);