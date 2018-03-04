var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './index.scss';

let Registration = function (_Component) {
  _inherits(Registration, _Component);

  function Registration(...args) {
    var _temp, _this, _ret;

    _classCallCheck(this, Registration);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (Registration.__proto__ || Object.getPrototypeOf(Registration)).call(this, ...args)), _this), _this.signUp = () => {
      let name = _this.refs.name.value;
      let username = _this.refs.username.value;
      let password = _this.refs.password.value;

      if (!name || !password || !username) {
        alert('Please, enter all fields');
        return;
      }

      _this.props.requestRegister({ name, username, password });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Registration, [{
    key: 'render',
    value: function render() {
      const { user } = this.props;

      if (user) {
        return React.createElement(Redirect, { to: '/' });
      }

      return React.createElement(
        'div',
        null,
        React.createElement(
          'h2',
          null,
          'Sign up to be able to post here'
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement('input', { name: 'name', type: 'text', required: true, className: 'form-group__input', ref: 'name', placeholder: 'Name' })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement('input', { name: 'username', type: 'text', ref: 'username', required: true, className: 'form-group__input', placeholder: 'Username' })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement('input', { name: 'password', type: 'password', ref: 'password', required: true, className: 'form-group__input', placeholder: 'Password' })
        ),
        React.createElement(
          'button',
          { className: 'btn', onClick: this.signUp },
          'Sign Up'
        )
      );
    }
  }]);

  return Registration;
}(Component);

export default Registration;