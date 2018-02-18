import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts, createPost, removePost } from '../../../store/posts';

import Feed from '../components';

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPosts,
  createPost,
  removePost
}, dispatch);

const mapStateToProps = state => ({
  posts: state.posts.items,
  loading: state.posts.loading
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);

