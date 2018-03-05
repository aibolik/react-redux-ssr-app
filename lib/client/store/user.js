'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerSuccess = exports.requestRegister = undefined;

var _ACTION_HANDLERS;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.watchRegisterUser = watchRegisterUser;
exports.saga = saga;
exports.default = userReducer;

var _effects = require('redux-saga/effects');

var _api = require('../api');

var _marked = /*#__PURE__*/regeneratorRuntime.mark(registerUserAsync),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(watchRegisterUser),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(saga);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Action PropTypes
var REGISTER_REQUEST = 'user/REGISTER_REQUEST';
var REGISTER_SUCCESS = 'user/REGISTER_SUCCESS';
var REGISTER_FAILURE = 'user/REGISTER_FAILURE';

var requestRegister = exports.requestRegister = function requestRegister(user) {
  return {
    type: REGISTER_REQUEST,
    user: user
  };
};

var registerSuccess = exports.registerSuccess = function registerSuccess(user) {
  return {
    type: REGISTER_SUCCESS,
    user: user
  };
};

var ACTION_HANDLERS = (_ACTION_HANDLERS = {}, _defineProperty(_ACTION_HANDLERS, REGISTER_REQUEST, function (state, action) {
  return _extends({}, state, {
    loading: true
  });
}), _defineProperty(_ACTION_HANDLERS, REGISTER_SUCCESS, function (state, action) {
  return {
    loading: false,
    user: action.user
  };
}), _ACTION_HANDLERS);

var INITIAL_STATE = {
  loading: false,
  user: null

  // Sagas
};function registerUserAsync(action) {
  var user;
  return regeneratorRuntime.wrap(function registerUserAsync$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.call)(function () {
            return (0, _api.registerUserAjax)(action.user);
          });

        case 2:
          user = _context.sent;
          _context.next = 5;
          return (0, _effects.put)(registerSuccess(user));

        case 5:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

function watchRegisterUser() {
  return regeneratorRuntime.wrap(function watchRegisterUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeLatest)(REGISTER_REQUEST, registerUserAsync);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

function saga() {
  return regeneratorRuntime.wrap(function saga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.all)([watchRegisterUser()]);

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  var handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}