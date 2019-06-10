import { call, put, getContext } from 'redux-saga/effects';
import { getFeed } from '../api';
import {
  requestFeedSuccess,
  requestFeedError,
  addPostSuccess,
  addPostError,
} from '../actions';
import errorParser from '../../shared/utils/errorParser';

export function* requestFeed({ user }){
  try{
    const items = yield call(getFeed, user);
    yield put(requestFeedSuccess(items));
  }catch(error){
    console.error(error);
    yield put(requestFeedError(errorParser(error)));
  }
}

export function* addPost({ post: message }){
  try{
    const { posts } = yield getContext('firebase');
    const item = yield posts().add({ message, createdBy: 'bGF5359vgNFpaQBS4ORG' });
    yield put(addPostSuccess(item));
  }catch(error){
    console.error(error);
    yield put(addPostError(errorParser(error)));
  }
}