import { call, put, all, takeLatest } from 'redux-saga/effects';
import { fetchPostsAjax, createPostAjax, removePostAjax } from '../api';

// Action types
const FETCH_POSTS = 'posts/FETCH_POSTS';
const UPDATE_POSTS = 'posts/UPDATE_POSTS';
const CREATE_POST = 'posts/CREATE_POST';
const APPEND_POST = 'posts/APPEND_POST';
const REMOVE_POST = 'posts/REMOVE_POST';
const POP_POST = 'posts/POP_POST';
const FILTER_POSTS = 'posts/FILTER_POSTS';

// Action creators
export const fetchPosts = () => ({
  type: FETCH_POSTS
});

export const updatePosts = posts => ({
  type: UPDATE_POSTS,
  payload: posts.items
});

export const createPost = post => ({
  type: CREATE_POST,
  post
});

export const appendPost = post => ({
  type: APPEND_POST,
  payload: post
});

export const removePost = postId => ({
  type: REMOVE_POST,
  postId
});

export const popPost = postId => ({
  type: POP_POST,
  postId
});

export const filterPosts = text => ({
  type: FILTER_POSTS,
  text
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
  }),

  [CREATE_POST]: (state, action) => ({
    ...state,
    loading: true
  }),

  [APPEND_POST]: (state, action) => ({
    ...state,
    loading: false,
    items: [...state.items, action.payload]
  }),

  [REMOVE_POST]: (state, action) => {
    let payload = { ...state };
    payload.items = state.items.map(item => {
      if(item['_id'] === action.postId) {
        item.toBeDeleted = true;
      }
      return item;
    });

    return payload;
  },

  [POP_POST]: (state, action) => {
    let payload = { ...state };
    payload.items = state.items.filter(item => {
      return item['_id'] !== action.postId;
    });

    return payload;
  },

  [FILTER_POSTS]: (state, action) => {
    let payload = { ...state };

    if (action.text.length === 0) {
      return {
        ...state,
        filtering: false,
        filtered: []
      };
    }

    payload.filtering = true;
    payload.filtered = state.items.filter(item => {
      return item.author.toLowerCase().indexOf(action.text.toLowerCase()) >= 0;
    });

    return payload;
  }
};

// Sagas
function* fetchPostsAsync() {
  const posts = yield call(() => fetchPostsAjax());

  yield put(updatePosts(posts));
}

export function* watchFetchPosts() {
  yield takeLatest(FETCH_POSTS, fetchPostsAsync);
}

function* createPostAsync(action) {
  const result = yield call(() => createPostAjax(action.post));

  yield put(appendPost(result));
}

export function* watchCreatePost() {
  yield takeLatest(CREATE_POST, createPostAsync);
}

function* removePostAsync(action) {
  const result = yield call(() => removePostAjax(action.postId));

  yield put(popPost(action.postId));
}

export function* watchRemovePost() {
  yield takeLatest(REMOVE_POST, removePostAsync);
}

export function* saga() {
  yield all([
    watchFetchPosts(),
    watchCreatePost(),
    watchRemovePost()
  ]);
}

// Initial state
const INITIAL_STATE = {
  loading: false,
  items: [],
  filtered: [],
  filtering: false
};

export default function postsReducer (state = INITIAL_STATE, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
