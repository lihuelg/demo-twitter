import * as actionTypes from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  isValid: null,
  error: null,
};

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_POST:
      return {
        ...state,
        isFetching: true,
        isValid: null,
      }
    case actionTypes.ADD_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isValid: true,
      }
    case actionTypes.ADD_POST_ERROR:
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