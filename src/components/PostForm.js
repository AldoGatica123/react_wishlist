import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../css/PostForm.css'

class PostForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.name.value;
    const description = this.description.value;
    const price = this.price.value;
    const image_url = this.image_url.value;
    const product_url = this.product_url.value;
    const data = {
      id: new Date(),
      name,
      description,
      price,
      image_url,
      product_url,
      editing:false
    };

    this.props.dispatch({type:'ADD_POST', data});
    this.name.value = '';
    this.description.value = '';
    this.price.value = '';
    this.image_url.value = '';
    this.product_url.value = '';
  };

  render() {
    return (
      <div className="create-container">
        <form onSubmit={this.handleSubmit}>
          <input required type="text" ref={(input) => this.name = input}
                 placeholder="Enter Item Name" /><br />
          <input required type="text" ref={(input) => this.description = input}
                 placeholder="Enter Item Description" /><br />
          <input required type="text" ref={(input) => this.price = input}
                 placeholder="Enter Item Price" /><br />
          <input required type="text" ref={(input) => this.image_url = input}
                 placeholder="Enter Item Image URL" /><br />
          <input required type="text" ref={(input) => this.product_url = input}
                 placeholder="Enter Item Product URL" /><br />

          <button className="post-button">Post</button>
          <button className="cancel-button" onClick={this.closeModal}>Cancel</button>
        </form>
      </div>
    );
  }
}
export default connect()(PostForm);