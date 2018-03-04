import { all } from 'redux-saga/effects';

import { saga as postsSaga } from './posts';
import { saga as userSaga } from './user';

export default function* rootSaga() {
  yield all([postsSaga(), userSaga()]);
}