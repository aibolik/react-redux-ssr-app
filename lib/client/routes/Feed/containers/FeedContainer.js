'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _posts = require('../../../store/posts');

var _components = require('../components');

var _components2 = _interopRequireDefault(_components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    fetchPosts: _posts.fetchPosts,
    createPost: _posts.createPost,
    removePost: _posts.removePost,
    filterPosts: _posts.filterPosts
  }, dispatch);
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    posts: state.posts.items,
    filtered: state.posts.filtered,
    filtering: state.posts.filtering,
    loading: state.posts.loading
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_components2.default);