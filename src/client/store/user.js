import { call, put, all, takeLatest } from 'redux-saga/effects';
import { registerUserAjax } from '../api';

// Action PropTypes
const REGISTER_REQUEST = 'user/REGISTER_REQUEST';
const REGISTER_SUCCESS = 'user/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'user/REGISTER_FAILURE';

export const requestRegister = user => ({
  type: REGISTER_REQUEST,
  user
});

export const registerSuccess = user => ({
  type: REGISTER_SUCCESS,
  user
})

const ACTION_HANDLERS = {
  [REGISTER_REQUEST]: (state, action) => ({
    ...state,
    loading: true
  }),
  [REGISTER_SUCCESS]: (state, action) => ({
    loading: false,
    user: action.user
  })
}

const INITIAL_STATE = {
  loading: false,
  user: null
}

// Sagas
function* registerUserAsync(action) {
  const user = yield call(() => registerUserAjax(action.user));

  yield(put(registerSuccess(user)));
}

export function* watchRegisterUser() {
  yield takeLatest(REGISTER_REQUEST, registerUserAsync)
}

export function* saga() {
  yield all([
    watchRegisterUser()
  ]);
}

export default function userReducer (state = INITIAL_STATE, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
