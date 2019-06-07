import { takeLatest } from "redux-saga/effects";
import * as generators from "./generators";
import * as actionTypes from "../constants/actionTypes";

export default function* (){
  yield takeLatest(generators.requestAuth, actionTypes.REQUEST_AUTH);
}
