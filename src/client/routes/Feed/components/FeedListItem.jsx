import React from 'react';
import PropTypes from 'prop-types';

const FeedListItem = ({ post }) => (
  <div>
    <p>{post.text}</p>
    <p>Author: <em>{post.author}</em></p>
  </div>
);

FeedListItem.propTypes = {
  post: PropTypes.object,
};

export default FeedListItem;