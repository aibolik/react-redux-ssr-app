import { all } from 'redux-saga/effects';

import { saga as postsSaga } from './posts';

export default function* rootSaga() {
  yield all([
    postsSaga(),
  ]);
}
