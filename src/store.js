import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from "./main/reducers";
import rootSaga from './main/sagas'

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  rootReducer,
  applyMiddleware(thunk, sagaMiddleware)
);

sagaMiddleware.run(rootSaga)