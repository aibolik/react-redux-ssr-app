'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeRootReducer = undefined;

var _redux = require('redux');

var _posts = require('./posts');

var _posts2 = _interopRequireDefault(_posts);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeRootReducer = exports.makeRootReducer = function makeRootReducer() {
  return (0, _redux.combineReducers)({
    posts: _posts2.default,
    user: _user2.default
  });
};

exports.default = makeRootReducer;