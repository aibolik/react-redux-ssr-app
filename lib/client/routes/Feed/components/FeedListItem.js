'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

({
  "post": "yxR",
  "post__remove": "yff",
  "postRemove": "yff",
  "post--with-author": "_1-6",
  "postWithAuthor": "_1-6",
  "post__data": "_2st",
  "postData": "_2st",
  "post__author": "eiB",
  "postAuthor": "eiB"
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FeedListItem = function FeedListItem(_ref) {
  var post = _ref.post,
      removePost = _ref.removePost,
      userId = _ref.userId;
  return _react2.default.createElement(
    'div',
    { className: 'post ' + (userId === post.author._id ? 'post--with-author' : '') },
    _react2.default.createElement(
      'div',
      { className: 'post__remove', onClick: function onClick(e) {
          return removePost(post._id);
        } },
      'x'
    ),
    _react2.default.createElement(
      'div',
      { className: 'post__data' },
      _react2.default.createElement(
        'p',
        { className: 'post__title' },
        post.text
      ),
      _react2.default.createElement(
        'p',
        { className: 'post__author' },
        'Author: ',
        _react2.default.createElement(
          'em',
          null,
          post.author.name
        )
      )
    )
  );
};

FeedListItem.propTypes = {
  post: _propTypes2.default.object
};

exports.default = FeedListItem;