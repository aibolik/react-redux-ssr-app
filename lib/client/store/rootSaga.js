'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rootSaga;

var _effects = require('redux-saga/effects');

var _posts = require('./posts');

var _user = require('./user');

var _marked = /*#__PURE__*/regeneratorRuntime.mark(rootSaga);

function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.all)([(0, _posts.saga)(), (0, _user.saga)()]);

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}