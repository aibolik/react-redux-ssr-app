import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleWare, { END } from 'redux-saga';

import makeRootReducer from './reducers';
import rootSaga from './rootSaga';

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleWare();

export default (initialState) => {
  const rootReducer = makeRootReducer();
  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  sagaMiddleware.run(rootSaga);

  return store;
}