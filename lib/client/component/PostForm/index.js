var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

let PostForm = function (_Component) {
  _inherits(PostForm, _Component);

  function PostForm(...args) {
    var _temp, _this, _ret;

    _classCallCheck(this, PostForm);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (PostForm.__proto__ || Object.getPrototypeOf(PostForm)).call(this, ...args)), _this), _this.submitPost = () => {
      let author = 'No author';
      let text = _this.refs.text.value;

      _this.props.createPost({ author, text });
      _this.refs.text.value = '';
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PostForm, [{
    key: 'render',
    value: function render() {

      return React.createElement(
        'div',
        { className: 'post-form' },
        React.createElement('textarea', { className: 'post-form__text', placeholder: 'Your text', ref: 'text' }),
        React.createElement(
          'button',
          { className: 'btn', onClick: this.submitPost },
          'Submit'
        )
      );
    }
  }]);

  return PostForm;
}(Component);

PostForm.propTypes = {
  sendPost: PropTypes.func
};


export default PostForm;