var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../../../component/Loading';
import FeedListItem from './FeedListItem';
import PostForm from '../../../component/PostForm';
import './index.scss';

let Feed = function (_Component) {
  _inherits(Feed, _Component);

  function Feed(...args) {
    var _temp, _this, _ret;

    _classCallCheck(this, Feed);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (Feed.__proto__ || Object.getPrototypeOf(Feed)).call(this, ...args)), _this), _this.onFilterChange = e => {
      _this.props.filterPosts(e.target.value);
    }, _this.renderFeed = () => {
      return _this.props[_this.props.filtering ? 'filtered' : 'posts'].map((item, i) => {
        return React.createElement(FeedListItem, { post: item, key: i, removePost: _this.props.removePost });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Feed, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.fetchPosts();
    }
  }, {
    key: 'render',
    value: function render() {
      const { posts, loading, createPost } = this.props;
      return React.createElement(
        'div',
        { className: 'feed' },
        React.createElement('input', { type: 'text', className: 'feed__filter', onChange: this.onFilterChange, placeholder: 'Filter posts by author' }),
        React.createElement(PostForm, { createPost: createPost }),
        React.createElement(
          'p',
          { className: 'feed__title' },
          'My feed'
        ),
        loading ? React.createElement(Loading, null) : this.renderFeed()
      );
    }
  }]);

  return Feed;
}(Component);

Feed.propTypes = {
  fetchPosts: PropTypes.func
};


export default Feed;