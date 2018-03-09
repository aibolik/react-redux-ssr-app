import { call, put, all, takeLatest } from 'redux-saga/effects';
import { registerUserAjax, signInUserAjax } from '../api';
import { decodeJwtToken } from '../utils';
import CookieHelper from '../utils/CookieHelper';

// Action PropTypes
const REGISTER_REQUEST = 'user/REGISTER_REQUEST';
const REGISTER_SUCCESS = 'user/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'user/REGISTER_FAILURE';

const SIGNIN_REQUEST = 'user/SIGNIN_REQUEST';
const SIGNIN_SUCCESS = 'user/SIGNIN_SUCCESS';

const LOGOUT = 'user/LOGOUT';

export const requestRegister = user => ({
  type: REGISTER_REQUEST,
  user
});

export const registerSuccess = user => ({
  type: REGISTER_SUCCESS,
  user
});

export const signInRequest = user => ({
  type: SIGNIN_REQUEST,
  user
});

export const signInSuccess = user => ({
  type: SIGNIN_SUCCESS,
  user
});

export const logOut = () => ({
  type: LOGOUT
});

const ACTION_HANDLERS = {
  [REGISTER_REQUEST]: (state, action) => ({
    ...state,
    loading: true
  }),
  [REGISTER_SUCCESS]: (state, action) => ({
    loading: false,
    user: action.user
  }),
  [SIGNIN_REQUEST]: (state, action) => ({
    ...state,
    loading: true
  }),
  [SIGNIN_SUCCESS]: (state, action) => ({
    loading: false,
    user: action.user
  }),
  [LOGOUT]: (state, action) => {
    CookieHelper.eraseCookie('JwtToken');
    return {
      loading: false
    }
  }
};

const INITIAL_STATE = {
  loading: false
};

if (typeof window === 'object') {
  let token = CookieHelper.readCookie('JwtToken');
  if (token) {
    INITIAL_STATE.user = decodeJwtToken(token);
  }
}

// Sagas
function* registerUserAsync(action) {
  const response = yield call(() => registerUserAjax(action.user));

  let user = decodeJwtToken(response.token);

  yield(put(registerSuccess(user)));
}

export function* watchRegisterUser() {
  yield takeLatest(REGISTER_REQUEST, registerUserAsync)
}

function* signInUserAsync(action) {
  const response = yield call(() => signInUserAjax(action.user));

  let user = decodeJwtToken(response.token);

  yield(put(signInSuccess(user)));
}

export function* watchSignInUser() {
  yield takeLatest(SIGNIN_REQUEST, signInUserAsync);
}

export function* saga() {
  yield all([
    watchRegisterUser(),
    watchSignInUser()
  ]);
}

export default function userReducer (state = INITIAL_STATE, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
