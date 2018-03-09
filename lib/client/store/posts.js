'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterPosts = exports.popPost = exports.removePost = exports.appendPost = exports.createPost = exports.updatePosts = exports.fetchPosts = undefined;

var _ACTION_HANDLERS;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.watchFetchPosts = watchFetchPosts;
exports.watchCreatePost = watchCreatePost;
exports.watchRemovePost = watchRemovePost;
exports.saga = saga;
exports.default = postsReducer;

var _effects = require('redux-saga/effects');

var _api = require('../api');

var _marked = /*#__PURE__*/regeneratorRuntime.mark(fetchPostsAsync),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(watchFetchPosts),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(createPostAsync),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(watchCreatePost),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(removePostAsync),
    _marked6 = /*#__PURE__*/regeneratorRuntime.mark(watchRemovePost),
    _marked7 = /*#__PURE__*/regeneratorRuntime.mark(saga);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Action types
var FETCH_POSTS = 'posts/FETCH_POSTS';
var UPDATE_POSTS = 'posts/UPDATE_POSTS';
var CREATE_POST = 'posts/CREATE_POST';
var APPEND_POST = 'posts/APPEND_POST';
var REMOVE_POST = 'posts/REMOVE_POST';
var POP_POST = 'posts/POP_POST';
var FILTER_POSTS = 'posts/FILTER_POSTS';

// Action creators
var fetchPosts = exports.fetchPosts = function fetchPosts() {
  return {
    type: FETCH_POSTS
  };
};

var updatePosts = exports.updatePosts = function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    payload: posts.items
  };
};

var createPost = exports.createPost = function createPost(post) {
  return {
    type: CREATE_POST,
    post: post
  };
};

var appendPost = exports.appendPost = function appendPost(post) {
  return {
    type: APPEND_POST,
    payload: post
  };
};

var removePost = exports.removePost = function removePost(postId) {
  return {
    type: REMOVE_POST,
    postId: postId
  };
};

var popPost = exports.popPost = function popPost(postId) {
  return {
    type: POP_POST,
    postId: postId
  };
};

var filterPosts = exports.filterPosts = function filterPosts(text) {
  return {
    type: FILTER_POSTS,
    text: text
  };
};

var ACTION_HANDLERS = (_ACTION_HANDLERS = {}, _defineProperty(_ACTION_HANDLERS, FETCH_POSTS, function (state, action) {
  return _extends({}, state, {
    loading: true
  });
}), _defineProperty(_ACTION_HANDLERS, UPDATE_POSTS, function (state, action) {
  return _extends({}, state, {
    loading: false,
    items: action.payload
  });
}), _defineProperty(_ACTION_HANDLERS, CREATE_POST, function (state, action) {
  return _extends({}, state, {
    loading: true
  });
}), _defineProperty(_ACTION_HANDLERS, APPEND_POST, function (state, action) {
  return _extends({}, state, {
    loading: false,
    items: [].concat(_toConsumableArray(state.items), [action.payload])
  });
}), _defineProperty(_ACTION_HANDLERS, REMOVE_POST, function (state, action) {
  var payload = _extends({}, state);
  payload.items = state.items.map(function (item) {
    if (item['_id'] === action.postId) {
      item.toBeDeleted = true;
    }
    return item;
  });

  return payload;
}), _defineProperty(_ACTION_HANDLERS, POP_POST, function (state, action) {
  var payload = _extends({}, state);
  payload.items = state.items.filter(function (item) {
    return item['_id'] !== action.postId;
  });

  return payload;
}), _defineProperty(_ACTION_HANDLERS, FILTER_POSTS, function (state, action) {
  var payload = _extends({}, state);

  if (action.text.length === 0) {
    return _extends({}, state, {
      filtering: false,
      filtered: []
    });
  }

  payload.filtering = true;
  payload.filtered = state.items.filter(function (item) {
    return item.author.name.toLowerCase().indexOf(action.text.toLowerCase()) >= 0;
  });

  return payload;
}), _ACTION_HANDLERS);

// Sagas
function fetchPostsAsync() {
  var posts;
  return regeneratorRuntime.wrap(function fetchPostsAsync$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.call)(function () {
            return (0, _api.fetchPostsAjax)();
          });

        case 2:
          posts = _context.sent;
          _context.next = 5;
          return (0, _effects.put)(updatePosts(posts));

        case 5:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

function watchFetchPosts() {
  return regeneratorRuntime.wrap(function watchFetchPosts$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeLatest)(FETCH_POSTS, fetchPostsAsync);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

function createPostAsync(action) {
  var result;
  return regeneratorRuntime.wrap(function createPostAsync$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.call)(function () {
            return (0, _api.createPostAjax)(action.post);
          });

        case 2:
          result = _context3.sent;
          _context3.next = 5;
          return (0, _effects.put)(appendPost(result));

        case 5:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

function watchCreatePost() {
  return regeneratorRuntime.wrap(function watchCreatePost$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.takeLatest)(CREATE_POST, createPostAsync);

        case 2:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this);
}

function removePostAsync(action) {
  var result;
  return regeneratorRuntime.wrap(function removePostAsync$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.call)(function () {
            return (0, _api.removePostAjax)(action.postId);
          });

        case 2:
          result = _context5.sent;
          _context5.next = 5;
          return (0, _effects.put)(popPost(action.postId));

        case 5:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this);
}

function watchRemovePost() {
  return regeneratorRuntime.wrap(function watchRemovePost$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0, _effects.takeLatest)(REMOVE_POST, removePostAsync);

        case 2:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked6, this);
}

function saga() {
  return regeneratorRuntime.wrap(function saga$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return (0, _effects.all)([watchFetchPosts(), watchCreatePost(), watchRemovePost()]);

        case 2:
        case 'end':
          return _context7.stop();
      }
    }
  }, _marked7, this);
}

// Initial state
var INITIAL_STATE = {
  loading: false,
  items: [],
  filtered: [],
  filtering: false
};

function postsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  var handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}