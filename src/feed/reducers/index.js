import * as actionTypes from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  isValid: null,
  list: [],
  error: null,
};

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.REQUEST_FEED:
      return {
        ...state,
        isFetching: true,
        isValid: null,
      }
    case actionTypes.REQUEST_FEED_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isValid: true,
        list: action.data,
      }
    case actionTypes.REQUEST_FEED_ERROR:
      return {
        ...state,
        isFetching: false,
        isValid: false,
        error: action.error
      }
    default:
      return state;
  }
}