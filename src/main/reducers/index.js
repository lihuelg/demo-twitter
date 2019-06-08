import { combineReducers } from "redux";
import authReducer from "../../auth/reducers";
import feedReducer from "../../feed/reducers";

export default combineReducers({
  authReducer,
  feedReducer,
});