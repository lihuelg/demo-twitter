import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'

import { preloadAuth, saveAuthOnStorageMiddleware } from './persist-auth';

import rootReducer from "./main/reducers";
import rootSaga from './main/sagas'

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  rootReducer,
  preloadAuth(),
  applyMiddleware(sagaMiddleware, logger, saveAuthOnStorageMiddleware)
);

sagaMiddleware.run(rootSaga)