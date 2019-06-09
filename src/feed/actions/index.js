import * as actionTypes from '../constants/actionTypes';

export const requestFeed = (user) => (
  { type: actionTypes.REQUEST_FEED, user }
);

export const requestFeedSuccess = (data) => (
  { type: actionTypes.REQUEST_FEED_SUCCESS, data }
);

export const requestFeedError = (error) => (
  { type: actionTypes.REQUEST_FEED_ERROR, error }
);

export const addPost = (post) => (
  { type: actionTypes.ADD_POST, post }
);

export const addPostSuccess = (data) => (
  { type: actionTypes.ADD_POST_SUCCESS, data }
);

export const addPostError = (error) => (
  { type: actionTypes.ADD_POST_ERROR, error }
);