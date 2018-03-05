'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

({
  "home__welcome": "_2RF",
  "homeWelcome": "_2RF",
  "home__join-us": "_3DQ",
  "homeJoinUs": "_3DQ"
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home(props) {
  return _react2.default.createElement(
    'div',
    { className: 'home' },
    props.user ? _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(
        'h2',
        { className: 'home__welcome' },
        'Hi, ',
        props.user.name,
        '! Do you want to explore our simple blog and post your own content?'
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        { className: 'home__join-us', to: '/feed' },
        'Get started!'
      )
    ) : _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(
        'h2',
        { className: 'home__welcome' },
        'Hi, there! Do you want to become an author in this simple blog?'
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        { className: 'home__join-us', to: '/signup' },
        'Join Us!'
      )
    )
  );
};

exports.default = Home;