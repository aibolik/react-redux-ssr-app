import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare, { END } from 'redux-saga';

import makeRootReducer from './reducers';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleWare();

export default (initialState) => {
  const rootReducer = makeRootReducer();
  const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  sagaMiddleware.run(rootSaga);

  return store;
}