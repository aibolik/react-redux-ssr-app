'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logOut = exports.signInSuccess = exports.signInRequest = exports.registerSuccess = exports.requestRegister = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _ACTION_HANDLERS;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.watchRegisterUser = watchRegisterUser;
exports.watchSignInUser = watchSignInUser;
exports.saga = saga;
exports.default = userReducer;

var _effects = require('redux-saga/effects');

var _api = require('../api');

var _utils = require('../utils');

var _CookieHelper = require('../utils/CookieHelper');

var _CookieHelper2 = _interopRequireDefault(_CookieHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(registerUserAsync),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(watchRegisterUser),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(signInUserAsync),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(watchSignInUser),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(saga);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Action PropTypes
var REGISTER_REQUEST = 'user/REGISTER_REQUEST';
var REGISTER_SUCCESS = 'user/REGISTER_SUCCESS';
var REGISTER_FAILURE = 'user/REGISTER_FAILURE';

var SIGNIN_REQUEST = 'user/SIGNIN_REQUEST';
var SIGNIN_SUCCESS = 'user/SIGNIN_SUCCESS';

var LOGOUT = 'user/LOGOUT';

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

var signInRequest = exports.signInRequest = function signInRequest(user) {
  return {
    type: SIGNIN_REQUEST,
    user: user
  };
};

var signInSuccess = exports.signInSuccess = function signInSuccess(user) {
  return {
    type: SIGNIN_SUCCESS,
    user: user
  };
};

var logOut = exports.logOut = function logOut() {
  return {
    type: LOGOUT
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
}), _defineProperty(_ACTION_HANDLERS, SIGNIN_REQUEST, function (state, action) {
  return _extends({}, state, {
    loading: true
  });
}), _defineProperty(_ACTION_HANDLERS, SIGNIN_SUCCESS, function (state, action) {
  return {
    loading: false,
    user: action.user
  };
}), _defineProperty(_ACTION_HANDLERS, LOGOUT, function (state, action) {
  _CookieHelper2.default.eraseCookie('JwtToken');
  return {
    loading: false
  };
}), _ACTION_HANDLERS);

var INITIAL_STATE = {
  loading: false
};

if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
  var token = _CookieHelper2.default.readCookie('JwtToken');
  if (token) {
    INITIAL_STATE.user = (0, _utils.decodeJwtToken)(token);
  }
}

// Sagas
function registerUserAsync(action) {
  var response, user;
  return regeneratorRuntime.wrap(function registerUserAsync$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.call)(function () {
            return (0, _api.registerUserAjax)(action.user);
          });

        case 2:
          response = _context.sent;
          user = (0, _utils.decodeJwtToken)(response.token);
          _context.next = 6;
          return (0, _effects.put)(registerSuccess(user));

        case 6:
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

function signInUserAsync(action) {
  var response, user;
  return regeneratorRuntime.wrap(function signInUserAsync$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.call)(function () {
            return (0, _api.signInUserAjax)(action.user);
          });

        case 2:
          response = _context3.sent;
          user = (0, _utils.decodeJwtToken)(response.token);
          _context3.next = 6;
          return (0, _effects.put)(signInSuccess(user));

        case 6:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

function watchSignInUser() {
  return regeneratorRuntime.wrap(function watchSignInUser$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.takeLatest)(SIGNIN_REQUEST, signInUserAsync);

        case 2:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this);
}

function saga() {
  return regeneratorRuntime.wrap(function saga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.all)([watchRegisterUser(), watchSignInUser()]);

        case 2:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this);
}

function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  var handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}