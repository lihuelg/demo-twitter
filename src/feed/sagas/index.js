import { takeLatest } from 'redux-saga/effects';
import * as generators from './generators';
import * as actionTypes from '../constants/actionTypes';

export default function* () {
  yield takeLatest(actionTypes.REQUEST_FEED, generators.requestFeed);
}