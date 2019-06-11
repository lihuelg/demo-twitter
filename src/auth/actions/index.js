import * as actionTypes from '../constants/actionTypes';

export const requestAuth = (username, password, history) => (
  { type: actionTypes.REQUEST_AUTH, username, password, history }
);

export const requestAuthError = (error) => (
  { type: actionTypes.REQUEST_AUTH_ERROR, error }
);

export const requestRegister = (username, password, history) => (
  { type: actionTypes.REQUEST_REGISTER, username, password, history }
);

export const requestRegisterError = (error) => (
  { type: actionTypes.REQUEST_REGISTER_ERROR, error }
);

export const updateAuth = (data) => (
  { type: actionTypes.UPDATE_AUTH, data }
);