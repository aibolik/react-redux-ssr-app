import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../../../component/Loading';
import FeedListItem from './FeedListItem';
import PostForm from '../../../component/PostForm';
import './index.scss';

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
      return <FeedListItem userId={this.props.author && this.props.author.id}
        post={item} key={i} removePost={this.props.removePost} />
    })
  };

  render() {
    const { posts, loading, createPost, author } = this.props;
    return (
      <div className='feed'>
        <input type='text' className='feed__filter' onChange={this.onFilterChange} placeholder='Filter posts by author' />
        <PostForm createPost={createPost} author={author} />
        <p className='feed__title'>My feed</p>
        {loading ? <Loading /> : this.renderFeed()}
      </div>
    )
  }
}

export default Feed;
