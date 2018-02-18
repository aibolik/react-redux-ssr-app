import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../../../component/Loading';
import FeedListItem from './FeedListItem';
import PostForm from '../../../component/PostForm';

class Feed extends Component {
  static propTypes = {
    fetchPosts: PropTypes.func
  };

  componentWillMount() {
    this.props.fetchPosts();
  }

  onFilterChange = (e) => {
    this.props.filterPosts(e.target.value);
  };

  renderFeed = () => {
    return this.props[this.props.filtering ? 'filtered' : 'posts'].map((item, i) => {
      return <FeedListItem post={item} key={i} removePost={this.props.removePost} />
    })
  };

  render() {
    const { posts, loading, createPost } = this.props;
    return (
      <div>
        <h2>My feed</h2>
        <input type='text' onChange={this.onFilterChange} placeholder='Filter posts by author' />
        <PostForm createPost={createPost} />
        {loading ? <Loading /> : this.renderFeed()}
      </div>
    )
  }
}

export default Feed;
