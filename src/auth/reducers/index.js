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
    case actionTypes.REQUEST_AUTH_ERROR:
    case actionTypes.REQUEST_REGISTER_ERROR:
      return {
        ...state,
        error: action.error,
        isValid: false,
        isFetching: false,
      };
    case actionTypes.UPDATE_AUTH:
        return {
          ...state,
          token: action.data.token,
          id: action.data.id,
          isValid: true,
          isFetching: false,
        };
    default:
      return state;
  }
};