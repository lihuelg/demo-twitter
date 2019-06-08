import { put, call } from 'redux-saga/effects';
import { authenticate } from '../api';
import { requestAuthSuccess, requestAuthError } from '../actions';
import errorParser from '../../shared/utils/errorParser';

export function* requestAuth({ username, password }) {
  try {
    const { token } = yield call(authenticate, { email: username, password });
    yield put(requestAuthSuccess(token));
  } catch(error) {
    console.error(error);
    yield put(requestAuthError(errorParser(error)));
  }
}