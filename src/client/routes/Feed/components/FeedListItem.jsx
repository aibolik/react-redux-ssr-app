import React from 'react';
import PropTypes from 'prop-types';

const FeedListItem = ({ post, removePost }) => (
  <div>
    <p>{post.text}</p>
    <p>Author: <em>{post.author}</em></p>
    <button onClick={(e) => removePost(post._id)}>delete</button>
  </div>
);

FeedListItem.propTypes = {
  post: PropTypes.object,
};

export default FeedListItem;