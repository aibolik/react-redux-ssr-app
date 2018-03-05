'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _rootSaga = require('./rootSaga');

var _rootSaga2 = _interopRequireDefault(_rootSaga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
var sagaMiddleware = (0, _reduxSaga2.default)();

exports.default = function (initialState) {
  var rootReducer = (0, _reducers2.default)();
  var store = (0, _redux.createStore)(rootReducer, initialState, composeEnhancers((0, _redux.applyMiddleware)(sagaMiddleware)));

  store.runSaga = sagaMiddleware.run;
  store.close = function () {
    return store.dispatch(_reduxSaga.END);
  };
  sagaMiddleware.run(_rootSaga2.default);

  return store;
};