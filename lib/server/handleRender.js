'use strict';

var path = require('path');
var React = require('react');

var _require = require('react-dom/server'),
    renderToString = _require.renderToString;

var _require2 = require('react-router-dom'),
    StaticRouter = _require2.StaticRouter;

var _require3 = require('react-redux'),
    Provider = _require3.Provider;

var pug = require('pug');
var cookieParser = require('cookie-parser');

var rootSaga = require('../client/store/rootSaga').default;
var createStore = require('../client/store/createStore').default;
var App = require('../client/App.js').default;
var decodeJwtToken = require('../client/utils/').decodeJwtToken;

// pug.renderFile(path.resolve(__dirname, 'views/index.pug'), {html, preloadedState })

// const template = require('pug-loader!./views/index.pug').default;

var renderFullPage = function renderFullPage(html, preloadedState) {
  // const template = require('./views/index.pug');
  // return template({ html, preloadedState });
  return pug.renderFile(path.resolve(__dirname, 'views/index.pug'), { html: html, preloadedState: preloadedState });
};

var handleRender = function handleRender(req, res) {
  var cookies = cookieParser.JSONCookies(req.cookies);
  var initialState = {};
  if (cookies.JwtToken) {
    initialState.user = {
      loading: false,
      user: decodeJwtToken(cookies.JwtToken)
    };
  }
  var store = createStore(initialState);

  var context = {};
  var app = React.createElement(
    Provider,
    { store: store },
    React.createElement(
      StaticRouter,
      { location: req.url, context: context },
      React.createElement(App, null)
    )
  );

  store.runSaga(rootSaga).done.then(function () {
    var html = renderToString(app);

    if (context.url) {
      // Somewhere a `<Redirect>` was rendered
      return res.redirect(context.url);
    }

    // Grab the initial state from our Redux store
    var preloadedState = store.getState();

    return res.send(renderFullPage(html, preloadedState));
  });

  // Do first render, starts initial actions.
  renderToString(app);

  // When the first render is finished, send the END action to redux-saga.
  store.close();
};

module.exports = handleRender;