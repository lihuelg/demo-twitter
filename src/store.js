import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'

import rootReducer from "./main/reducers";
import rootSaga from './main/sagas'

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga)