import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/EditComponent.css'
import * as api from '../api/api_request'

class EditComponent extends Component {
  handleEdit = (e) => {
    e.preventDefault();
    const name = this.name.value;
    const description = this.description.value;
    const price = this.price.value;
    const image_url = this.image_url.value;
    const product_url = this.product_url.value;
    const data = {
      name,
      description,
      price,
      image_url,
      product_url
    };

    api.edittWishlistItem(this.props.post.id, data);
    this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
  };

  render() {
    return (
      <div className="edit-container">
        <form onSubmit={this.handleEdit}>
          <label>Name</label>
          <input required type="text" ref={(input) => this.name = input}
                 defaultValue={this.props.post.name} placeholder="Enter Item Name" /><br />
          <label>Description</label>
          <input required type="text" ref={(input) => this.description = input}
                 defaultValue={this.props.post.description} placeholder="Enter Item Description" /><br />
          <label>Price</label>
          <input required type="text" ref={(input) => this.price = input}
                 defaultValue={this.props.post.price} placeholder="Enter Item Price" /><br />
          <label>Image url</label>
          <input required type="text" ref={(input) => this.image_url = input}
                 defaultValue={this.props.post.image_url} placeholder="Enter Item Image URL" /><br />
          <label>Product url</label>
          <input required type="text" ref={(input) => this.product_url = input}
                 defaultValue={this.props.post.product_url} placeholder="Enter Item Product URL" /><br />
          <button className="update-button">Update</button>
        </form>
      </div>
    );
  }
}
export default connect()(EditComponent);