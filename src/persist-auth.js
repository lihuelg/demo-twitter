import * as actionTypes from './main/constants/actionTypes';

export const saveAuthOnStorageMiddleware = store => next => action => {
  next(action);
  if(action.type === actionTypes.REQUEST_AUTH_SUCCESS){
    localStorage.setItem('auth', JSON.stringify({ authReducer: store.getState().authReducer }));
  }
};

export const preloadAuth = () => {
  const authState = localStorage.getItem('auth');
  return authState ? JSON.parse(authState) : {};
}