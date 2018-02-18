import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostForm extends Component {
  static propTypes = {
    sendPost: PropTypes.func
  };

  submitPost = () => {
    let author = this.refs.author.value;
    let text = this.refs.text.value;

    this.props.createPost({ author, text });
    this.refs.author.value = '';
    this.refs.text.value = '';
  };
  
  render() {
    
    return (
      <div>
        <input ref='author' type='text' name='author' placeholder='Author' />
        <textarea ref='text' name='text' placeholder='Your post' />
        <button onClick={this.submitPost}>Submit</button>
      </div>
    );
  }
}

export default PostForm;