import React, {Component} from "react";
import { connect } from 'react-redux';
import '../css/Post.css'
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class Post extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

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
            <button className="post-delete" onClick={this.openModal}>Delete</button>
            <div>
              <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Delete item">

                <h3>Are you sure you want to delete this item from your wishlist?</h3>
                <div className="confirmation-container">
                  <button className="post-delete" onClick={()=>this.props.dispatch({type:'DELETE_POST', id:this.props.post.id})}>Delete</button>

                  <button className="cancel-button" onClick={this.closeModal}>Cancel</button>
                </div>
              </Modal>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default connect()(Post);