import { put, call, fork, take, getContext } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import * as actionTypes from '../constants/actionTypes';
import {
  updateAuth,
  requestAuthError,
  requestRegisterError,
} from '../actions';
import { errorParser } from '../../shared/utils';

function createAuthChangedChannel(auth) {
  return eventChannel(emit => {

    const onValueHandler = user => {
      console.log(user);
      emit({ data: { token: user.ra, id: user.uid }});
    }

    const onErrorHandler = errorEvent => {
      emit(new Error(errorEvent));
    }

    const unsubscribe = auth.onAuthStateChanged(onValueHandler, onErrorHandler);

    return () => unsubscribe()
  })
}

function* checkAuthUpdates(){
  const { auth } = yield getContext('firebase');
    const getAuthChannel = createAuthChangedChannel(auth);
    try{
      while(true){
       const { data } = yield take(getAuthChannel);
       yield put(updateAuth(data)) 
      }
    }catch(error){
      console.error(error);
      yield put(requestAuthError(errorParser(error)));
    }
}

function request(errorCb) {
  return function* ({ username, password, type, history }) {
    try {
      yield fork(checkAuthUpdates);
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
      history.push('/');
    } catch (error) {
      console.error(error);
      yield put(errorCb(errorParser(error)));
    }
  }
}

export const requestAuth = request(requestAuthError);

export const requestRegister = request(requestRegisterError);