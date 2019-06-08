import { takeLatest } from "redux-saga/effects";
import * as generators from "./generators";
import * as actionTypes from "../constants/actionTypes";

export default function* (){
  yield takeLatest(actionTypes.REQUEST_AUTH, generators.requestAuth);
  yield takeLatest(actionTypes.REQUEST_REGISTER, generators.requestRegister);
}
