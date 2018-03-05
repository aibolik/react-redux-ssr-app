'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _createStore = require('./store/createStore');

var _createStore2 = _interopRequireDefault(_createStore);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _createStore2.default)(window.PRELOADED_STATE);
delete window.PRELOADED_STATE;

var app = _react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(_App2.default, null)
  )
);

(0, _reactDom.hydrate)(app, document.getElementById('root'));