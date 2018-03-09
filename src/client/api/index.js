import CookieHelper from '../utils/CookieHelper';
export const BASE_URL = 'https://sdubot.jsindev.party:1000';

export const fetchPostsAjax = () => {
  return fetch(`${BASE_URL}/blogs`)
    .then(res => res.json());
};

export const createPostAjax = post => {
  return fetch(`${BASE_URL}/blogs`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${CookieHelper.readCookie('JwtToken')}`
    },
    body: JSON.stringify(post)
  }).then(res => res.json());
};

export const removePostAjax = postId => {
  return fetch(`${BASE_URL}/blogs/${postId}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${CookieHelper.readCookie('JwtToken')}`
    }
  }).then(res => res.json());
};

export const registerUserAjax = user => {
  return fetch(`${BASE_URL}/user/register`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(res => res.json());
};

export const signInUserAjax = user => {
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(res => res.json());
};
