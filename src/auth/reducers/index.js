import * as actionTypes from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  isValid: null,
  token: null,
  error: null,
};

export default (state = initialState, action) => {
  switch(action.type){
    case actionTypes.REQUEST_AUTH:
    case actionTypes.REQUEST_REGISTER:
      return {
        ...state,
        error: null,
        isValid: null,
        isFetching: true,
      };
    case actionTypes.REQUEST_AUTH_SUCCESS:
    case actionTypes.REQUEST_REGISTER_SUCCESS:
      return {
        ...state,
        token: action.data,
        isValid: true,
        isFetching: false,
      };
    case actionTypes.REQUEST_AUTH_ERROR:
    case actionTypes.REQUEST_REGISTER_ERROR:
      return {
        ...state,
        error: action.error,
        isValid: false,
        isFetching: false,
      };
    default:
      return state;
  }
};