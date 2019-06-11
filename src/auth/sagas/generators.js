import { put, call, getContext } from 'redux-saga/effects';
import * as actionTypes from '../constants/actionTypes';
import {
  requestAuthError,
  requestRegisterError,
} from '../actions';
import errorParser from '../../shared/utils/errorParser';

function request(successCb, errorCb) {
  return function* ({ username, password, history, type }) {
    try {
      const { authenticate, register } = yield getContext('firebase');
      let apiCall;
      switch(type){
        case actionTypes.REQUEST_AUTH:
          apiCall =authenticate;
          break;
        case actionTypes.REQUEST_REGISTER:
          apiCall = register;
          break;
        default:
      }
      yield call(apiCall, { username, password });
    } catch (error) {
      console.error(error);
      yield put(errorCb(errorParser(error)));
    }
  }
}

export const requestAuth = request(requestAuthError);

export const requestRegister = request(requestRegisterError);