'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
      'Content-Type': 'application/json'
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
      'Content-Type': 'application/json'
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