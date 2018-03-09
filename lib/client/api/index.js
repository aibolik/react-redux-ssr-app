'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signInUserAjax = exports.registerUserAjax = exports.removePostAjax = exports.createPostAjax = exports.fetchPostsAjax = exports.BASE_URL = undefined;

var _CookieHelper = require('../utils/CookieHelper');

var _CookieHelper2 = _interopRequireDefault(_CookieHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BASE_URL = exports.BASE_URL = 'https://sdubot.jsindev.party:1000';

var fetchPostsAjax = exports.fetchPostsAjax = function fetchPostsAjax() {
  return fetch(BASE_URL + '/blogs').then(function (res) {
    return res.json();
  });
};

var createPostAjax = exports.createPostAjax = function createPostAjax(post) {
  return fetch(BASE_URL + '/blogs', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + _CookieHelper2.default.readCookie('JwtToken')
    },
    body: JSON.stringify(post)
  }).then(function (res) {
    return res.json();
  });
};

var removePostAjax = exports.removePostAjax = function removePostAjax(postId) {
  return fetch(BASE_URL + '/blogs/' + postId, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + _CookieHelper2.default.readCookie('JwtToken')
    }
  }).then(function (res) {
    return res.json();
  });
};

var registerUserAjax = exports.registerUserAjax = function registerUserAjax(user) {
  return fetch(BASE_URL + '/user/register', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(function (res) {
    return res.json();
  });
};

var signInUserAjax = exports.signInUserAjax = function signInUserAjax(user) {
  return fetch(BASE_URL + '/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(function (res) {
    return res.json();
  });
};