import * as actionTypes from '../constants/actionTypes';

export const requestAuth = (username, password) => (
  { type: actionTypes.REQUEST_AUTH, username, password }
);

export const requestAuthSuccess = (data) => (
  { type: actionTypes.REQUEST_AUTH_SUCCESS, data }
);

export const requestAuthError = (error) => (
  { type: actionTypes.REQUEST_AUTH_ERROR, error }
);