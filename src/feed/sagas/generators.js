import { call, put, select } from 'redux-saga/effects';
import { getFeed, sendPost } from '../api';
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

export function* addPost({ post: title }){
  try{
    //This should be removed once a proper api is setted up
    const id = yield select(({ feedReducer: { feedReducer: { list }} }) => list[list.length - 1].id + 1);
    const items = yield call(sendPost, { id, title, userId: 1 });
    yield put(addPostSuccess(items));
  }catch(error){
    console.error(error);
    yield put(addPostError(errorParser(error)));
  }
}