const path = require('path');
const React = require('react');
const {renderToString} = require('react-dom/server');
const {StaticRouter} = require('react-router-dom');
const {Provider} = require('react-redux');
const pug = require('pug');

const rootSaga = require('../client/store/rootSaga').default;
const createStore = require('../client/store/createStore').default;
const App = require('../client/App.js').default;

// pug.renderFile(path.resolve(__dirname, 'views/index.pug'), {html, preloadedState })

// const template = require('pug-loader!./views/index.pug').default;

const renderFullPage = (html, preloadedState) => {
  // const template = require('./views/index.pug');
  // return template({ html, preloadedState });
  return pug.renderFile(path.resolve(__dirname, 'views/index.pug'), {html, preloadedState })
};

const handleRender = (req, res) => {
  const store = createStore();

  const context = {};
  const app = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  store.runSaga(rootSaga).done.then(() => {
    const html = renderToString(app);

    if (context.url) {
      // Somewhere a `<Redirect>` was rendered
      return res.redirect(context.url);
    }

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    return res.send(renderFullPage(html, preloadedState));
  });

  // Do first render, starts initial actions.
  renderToString(app);

  // When the first render is finished, send the END action to redux-saga.
  store.close();
}

module.exports = handleRender;
