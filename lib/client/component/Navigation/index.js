'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

({
  "navigation": "_3yj",
  "profile": "_1Ay",
  "links": "_3lV",
  "links__item": "ORx",
  "linksItem": "ORx",
  "links__item--active": "_3PK",
  "linksItemActive": "_3PK"
});

var _User = require('../User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = function Navigation(props) {
  return _react2.default.createElement(
    'nav',
    { className: 'navigation' },
    _react2.default.createElement(
      'ul',
      { className: 'links' },
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { exact: true, to: '/', className: 'links__item', activeClassName: 'links__item--active' },
          'Home'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { to: '/feed', className: 'links__item', activeClassName: 'links__item--active' },
          'Feed'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'profile' },
      props.user ? _react2.default.createElement(_User2.default, _extends({}, props.user, { logOut: props.logOut })) : _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/signup', className: 'links__item' },
          'Sign Up'
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/signin', className: 'links__item' },
          'Sign In'
        )
      )
    )
  );
};

exports.default = Navigation;