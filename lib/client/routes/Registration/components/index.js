'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

({
  "form-group": "_1Fv",
  "formGroup": "_1Fv",
  "form-group__input": "_1CT",
  "formGroupInput": "_1CT"
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Registration = function (_Component) {
  _inherits(Registration, _Component);

  function Registration() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Registration);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Registration.__proto__ || Object.getPrototypeOf(Registration)).call.apply(_ref, [this].concat(args))), _this), _this.signUp = function () {
      var name = _this.refs.name.value;
      var username = _this.refs.username.value;
      var password = _this.refs.password.value;

      if (!name || !password || !username) {
        alert('Please, enter all fields');
        return;
      }

      _this.props.requestRegister({ name: name, username: username, password: password });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Registration, [{
    key: 'render',
    value: function render() {
      var user = this.props.user;


      if (user) {
        return _react2.default.createElement(_reactRouter.Redirect, { to: '/' });
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Sign up to be able to post here'
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement('input', { name: 'name', type: 'text', required: true, className: 'form-group__input', ref: 'name', placeholder: 'Name' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement('input', { name: 'username', type: 'text', ref: 'username', required: true, className: 'form-group__input', placeholder: 'Username' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement('input', { name: 'password', type: 'password', ref: 'password', required: true, className: 'form-group__input', placeholder: 'Password' })
        ),
        _react2.default.createElement(
          'button',
          { className: 'btn', onClick: this.signUp },
          'Sign Up'
        )
      );
    }
  }]);

  return Registration;
}(_react.Component);

exports.default = Registration;