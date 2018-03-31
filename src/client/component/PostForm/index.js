import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class PostForm extends Component {
  static propTypes = {
    sendPost: PropTypes.func
  };

  submitPost = () => {
    let author = this.props.author;
    let text = this.refs.text.value;

    if (!author) {
      alert('You have to be signed in to post here');
      return;
    }

    this.props.createPost({ author: author.id, text });
    this.refs.text.value = '';
  };

  render() {

    return (
      <div className='post-form'>
        <textarea className='post-form__text' placeholder='Your text' ref='text' />
        <button className='btn' onClick={this.submitPost}>Submit</button>
      </div>
    );
  }
}

export default PostForm;
