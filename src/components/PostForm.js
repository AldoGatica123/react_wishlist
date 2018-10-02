import React, { Component } from 'react';
import {connect} from 'react-redux';

class PostForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.name.value;
    const description = this.description.value;
    const price = this.price.value;
    const data = {
      id: new Date(),
      name,
      description,
      price,
      editing:false
    };

    this.props.dispatch({type:'ADD_POST', data});
    this.name.value = '';
    this.description.value = '';
    this.price.value = '';
  };

  render() {
    return (
      <div>
        <h1>Create Post</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            required type="text"
            ref={(input)=>this.name = input}
            placeholder="Enter Item Name"/><br/><br/>
          <input
            required type="text"
            ref={(input)=>this.description = input}
            placeholder="Enter Item Description"/><br/><br/>
          <input
            required type="text"
            ref={(input)=>this.price = input}
            placeholder="Enter Item Price"/><br/><br/>
          <br /><br />
          <button>Post</button>
        </form>
      </div>
    );
  }
}
export default connect()(PostForm);