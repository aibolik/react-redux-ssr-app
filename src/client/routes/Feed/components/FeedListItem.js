import React from 'react';
import PropTypes from 'prop-types';
import './FeedListItem.scss';

const FeedListItem = ({ post, removePost, userId }) => (
  <div className={`post ${userId === post.author._id ? 'post--with-author' : ''}`}>
    <div className='post__remove' onClick={e => removePost(post._id)}>x</div>
    <div className='post__data'>
      <p className='post__title'>{post.text}</p>
      <p className='post__author'>Author: <em>{post.author.name}</em></p>
    </div>
    {/* <button onClick={(e) => removePost(post._id)}>delete</button> */}
  </div>
);

FeedListItem.propTypes = {
  post: PropTypes.object,
};

export default FeedListItem;
