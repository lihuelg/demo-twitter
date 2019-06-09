import { combineReducers } from 'redux';
import feedReducer from './feed';
import postReducer from './post';

export default combineReducers({
  feedReducer,
  postReducer,
});