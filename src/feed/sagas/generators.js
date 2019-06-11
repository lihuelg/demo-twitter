import { take, put, getContext, fork, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import {
  updateFeed,
  requestFeedError,
  addPostSuccess,
  addPostError,
} from '../actions';
import { postDateFromTimestamp, errorParser } from '../../shared/utils';

function createGetPostChannel(firebaseCollection) {
  return eventChannel(emit => {

    const onValueHandler = snapshot => {
      emit({ 
        data: snapshot.docs
        .map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data, createdAtFormatted: postDateFromTimestamp(data.createdAt)};
        })
        .sort((postA, postB) => postB.createdAt.toDate() - postA.createdAt.toDate()) 
        || [] });
    }

    const onErrorHandler = errorEvent => {
      emit(new Error(errorEvent));
    }

    const unsubscribe = firebaseCollection.onSnapshot(onValueHandler, onErrorHandler);

    return () => unsubscribe()
  })
}

export function* requestFeed({ user }){
  yield fork(function* () {
    const { posts } = yield getContext('firebase');
    const getPostChan = createGetPostChannel(posts());
    try{
      while(true){
       const { data } = yield take(getPostChan);
       yield put(updateFeed(data)) 
      }
    }catch(error){
      console.error(error);
      yield put(requestFeedError(errorParser(error)));
    }
  });
}

export function* addPost({ post: message }){
  try{
    const { posts } = yield getContext('firebase');
    const userId = yield select(state => state.authReducer.id);
    const item = yield posts().add({ message, createdBy: userId, createdAt: new Date() });
    yield put(addPostSuccess(item));
  }catch(error){
    console.error(error);
    yield put(addPostError(errorParser(error)));
  }
}