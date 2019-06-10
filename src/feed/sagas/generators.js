import { take, put, getContext, fork } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import {
  updateFeed,
  requestFeedError,
  addPostSuccess,
  addPostError,
} from '../actions';
import errorParser from '../../shared/utils/errorParser';

function createGetPostChannel(firebaseCollection) {
  return eventChannel(emit => {

    const onValueHandler = snapshot => {
      emit({ data: snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) || [] });
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
    const item = yield posts().add({ message, createdBy: 'bGF5359vgNFpaQBS4ORG' });
    yield put(addPostSuccess(item));
  }catch(error){
    console.error(error);
    yield put(addPostError(errorParser(error)));
  }
}