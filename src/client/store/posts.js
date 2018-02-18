import { call, put, all, takeLatest } from 'redux-saga/effects';


// Action types
const FETCH_POSTS = 'posts/FETCH_POSTS';
const UPDATE_POSTS = 'posts/UPDATE_POSTS';

// Action creators
export const fetchPosts = () => ({
  type: FETCH_POSTS
});

export const updatePosts = posts => ({
  type: UPDATE_POSTS,
  payload: posts
});

const ACTION_HANDLERS = {
  [FETCH_POSTS]: (state, action) => ({
    ...state,
    loading: true
  }),
  [UPDATE_POSTS]: (state, action) => ({
    ...state,
    loading: false,
    items: action.payload
  })
};

const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=300ecf7f1d8c4128876d195675a1f16b';

// Sagas
function* fetchPostsAsync() {
  const posts = yield call(() => fetch(url).then(res => res.json()));

  yield put(updatePosts(posts));
}

export function* watchFetchPosts() {
  yield takeLatest(FETCH_POSTS, fetchPostsAsync);
}

export function* saga() {
  yield all([
    watchFetchPosts()
  ]);
}

// Initial state
const INITIAL_STATE = {
  loading: false,
  items: [],
};

export default function postsReducer (state = INITIAL_STATE, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
