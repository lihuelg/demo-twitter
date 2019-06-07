import { put } from 'redux-saga/effects';
import { authenticate } from '../api';
import { requestAuthSuccess, requestAuthError } from '../actions';

export function* requestAuth({ username, password }) {
  try {
    const { token } = yield authenticate({ email: username, password });
    yield put(requestAuthSuccess(token));
  } catch(error) {
    console.error(error);
    yield put(requestAuthError(error))
  }
}