import React, {Component} from "react";
import { connect } from 'react-redux';
import '../css/Post.css'

class Post extends Component {
  render() {
    return (
      <div className="post-item">
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.message}</p>

        <button
          onClick={()=>this.props.dispatch({type:'EDIT_POST',id:this.props.post.id})}>
          Edit</button>
        <button
          onClick={()=>this.props.dispatch({type:'DELETE_POST',id:this.props.post.id})}>
          Delete</button>
      </div>
    );
  }
}

export default connect()(Post);