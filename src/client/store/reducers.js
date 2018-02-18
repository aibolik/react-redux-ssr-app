import { combineReducers } from 'redux';
import posts from './posts';

export const makeRootReducer = () => {
  return combineReducers({
    posts
  })
};

export default makeRootReducer;