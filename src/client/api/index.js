export const BASE_URL = 'https://sdubot.jsindev.party:1000';

export const fetchPostsAjax = () => {
  return fetch(`${BASE_URL}/blogs`)
    .then(res => res.json());
};