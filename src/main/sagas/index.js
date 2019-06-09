import { all } from "redux-saga/effects";

import authSaga from "../../auth/sagas";
import feedSaga from "../../feed/sagas";

export default function * root() {
  yield all([
    authSaga(),
    feedSaga()
  ]);
}
