import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';
import PostForm from './PostForm';
import '../css/AllPost.css'
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

class AllPost extends Component {
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
      <div className="all-post-container">
        <div className="container-header">
          <h1>All Posts</h1>
          <button className="create-button" onClick={this.openModal}>Add item</button>
        </div>
        <div className="create-container">
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Create item">
            <h1>Add item</h1>
            <h3>Write what would you like to receive</h3>
            <PostForm/>
            <button className="cancel-button" onClick={this.closeModal}>Cancel</button>
          </Modal>
        </div>
        {this.props.posts.map((post) => (
          <div key={post.id}>
            {post.editing ? <EditComponent post={post} key={post.id} /> :
              <Post key={post.id} post={post} />}
          </div>
        ))}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    posts: state
  }
}


export default connect(mapStateToProps)(AllPost);