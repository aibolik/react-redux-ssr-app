'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Loading = require('../../../component/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _FeedListItem = require('./FeedListItem');

var _FeedListItem2 = _interopRequireDefault(_FeedListItem);

var _PostForm = require('../../../component/PostForm');

var _PostForm2 = _interopRequireDefault(_PostForm);

({
  "feed__title": "DVq",
  "feedTitle": "DVq",
  "feed__filter": "_22x",
  "feedFilter": "_22x"
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Feed = function (_Component) {
  _inherits(Feed, _Component);

  function Feed() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Feed);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Feed.__proto__ || Object.getPrototypeOf(Feed)).call.apply(_ref, [this].concat(args))), _this), _this.onFilterChange = function (e) {
      _this.props.filterPosts(e.target.value);
    }, _this.renderFeed = function () {
      return _this.props[_this.props.filtering ? 'filtered' : 'posts'].map(function (item, i) {
        return _react2.default.createElement(_FeedListItem2.default, { post: item, key: i, removePost: _this.props.removePost });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Feed, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.fetchPosts();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          posts = _props.posts,
          loading = _props.loading,
          createPost = _props.createPost;

      return _react2.default.createElement(
        'div',
        { className: 'feed' },
        _react2.default.createElement('input', { type: 'text', className: 'feed__filter', onChange: this.onFilterChange, placeholder: 'Filter posts by author' }),
        _react2.default.createElement(_PostForm2.default, { createPost: createPost }),
        _react2.default.createElement(
          'p',
          { className: 'feed__title' },
          'My feed'
        ),
        loading ? _react2.default.createElement(_Loading2.default, null) : this.renderFeed()
      );
    }
  }]);

  return Feed;
}(_react.Component);

Feed.propTypes = {
  fetchPosts: _propTypes2.default.func
};
exports.default = Feed;