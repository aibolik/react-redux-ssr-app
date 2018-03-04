import React from 'react';
import PropTypes from 'prop-types';
import './FeedListItem.scss';

const FeedListItem = ({ post, removePost }) => React.createElement(
  'div',
  { className: 'post' },
  React.createElement(
    'div',
    { className: 'post__remove', onClick: e => removePost(post._id) },
    'x'
  ),
  React.createElement(
    'div',
    { className: 'post__data' },
    React.createElement(
      'p',
      { className: 'post__title' },
      post.text
    ),
    React.createElement(
      'p',
      { className: 'post__author' },
      'Author: ',
      React.createElement(
        'em',
        null,
        post.author
      )
    )
  )
);

FeedListItem.propTypes = {
  post: PropTypes.object
};

export default FeedListItem;