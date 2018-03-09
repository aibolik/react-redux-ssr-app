'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

({
  "post-form": "_2AK",
  "postForm": "_2AK",
  "post-form__text": "riW",
  "postFormText": "riW"
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostForm = function (_Component) {
  _inherits(PostForm, _Component);

  function PostForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PostForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PostForm.__proto__ || Object.getPrototypeOf(PostForm)).call.apply(_ref, [this].concat(args))), _this), _this.submitPost = function () {
      var author = _this.props.author;
      var text = _this.refs.text.value;

      if (!author) {
        alert('You have to be signed in to post here');
        return;
      }

      _this.props.createPost({ author: author.id, text: text });
      _this.refs.text.value = '';
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PostForm, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'post-form' },
        _react2.default.createElement('textarea', { className: 'post-form__text', placeholder: 'Your text', ref: 'text' }),
        _react2.default.createElement(
          'button',
          { className: 'btn', onClick: this.submitPost },
          'Submit'
        )
      );
    }
  }]);

  return PostForm;
}(_react.Component);

PostForm.propTypes = {
  sendPost: _propTypes2.default.func
};
exports.default = PostForm;