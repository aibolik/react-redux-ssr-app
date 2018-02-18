import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostForm extends Component {
  static propTypes = {
    sendPost: PropTypes.func
  };

  submitPost = (e) => {
    console.log(e.data)
  };
  
  render() {
    
    return (
      <div>
        <input type='text' name='author' placeholder='Author' />
        <textarea name='text' placeholder='Your post' />
        <button onClick={this.submitPost}>Submit</button>
      </div>
    );
  }
}

export default PostForm;