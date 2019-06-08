import { call, put } from 'redux-saga/effects';
import { getFeed } from '../api';
import { requestFeedSuccess, requestFeedError } from '../actions';
import errorParser from '../../shared/utils/errorParser';

export function* requestFeed({ user }){
  try{
    const { items } = yield call(getFeed, user);
    yield put(requestFeedSuccess(items));
  }catch(error){
    console.error(error);
    yield put(requestFeedError(errorParser(error)));
  }
}