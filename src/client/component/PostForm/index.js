import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class PostForm extends Component {
  static propTypes = {
    sendPost: PropTypes.func
  };

  submitPost = () => {
    let author = 'No author';
    let text = this.refs.text.value;

    this.props.createPost({ author, text });
    this.refs.text.value = '';
  };

  render() {

    return (
      <div className='post-form'>
        <textarea className='post-form__text' placeholder='Your text' ref='text' />
        {/* <div className='input-group'>
          <textarea className='input-group__input' ref='text' name='text' />
          <span className='input-group__highlight' />
          <span className='input-group__bar' />
          <label className='input-group__label'>Your text</label>
        </div> */}
        <button className='post-form__btn' onClick={this.submitPost}>Submit</button>
      </div>
    );
  }
}

export default PostForm;
