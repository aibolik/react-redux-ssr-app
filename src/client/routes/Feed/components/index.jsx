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

  renderFeed = () => {
    return this.props.posts.map((item, i) => {
      return <FeedListItem post={item} key={i} />
    })
  }

  render() {
    const { posts, loading } = this.props;
    return (
      <div>
        <h2>My feed</h2>
        <PostForm />
        {loading ? <Loading /> : this.renderFeed()}
      </div>
    )
  }
}

export default Feed;
