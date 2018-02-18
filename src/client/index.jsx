import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import createStore from './store/createStore';
import App from './App';

const store = createStore(window.PRELOADED_STATE);
delete window.PRELOADED_STATE;

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

hydrate(app, document.getElementById('root'));