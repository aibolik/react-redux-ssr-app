import { combineReducers } from 'redux';
import posts from './posts';
import user from './user';

export const makeRootReducer = () => {
  return combineReducers({
    posts,
    user
  })
};

export default makeRootReducer;
