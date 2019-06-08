import { put, call } from 'redux-saga/effects';
import { authenticate, register } from '../api';
import {
  requestAuthSuccess,
  requestAuthError,
  requestRegisterSuccess,
  requestRegisterError,
} from '../actions';
import errorParser from '../../shared/utils/errorParser';


function request(apiCall, successCb, errorCb) {
  return function* ({ username, password, history }) {
    try {
      const { token } = yield call(apiCall, { email: username, password });
      yield put(successCb(token));
      yield put(history.push('/'))
    } catch (error) {
      console.error(error);
      yield put(errorCb(errorParser(error)));
    }
  }
}

export const requestAuth = request(authenticate, requestAuthSuccess, requestAuthError);

export const requestRegister = request(register, requestRegisterSuccess, requestRegisterError);