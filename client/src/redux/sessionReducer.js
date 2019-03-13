import { combineReducers } from 'redux';
import { actionTypes } from './actions';

// session: {
//   user: null,
//   isAthenticated: false,
//   isAuthenticating: false,
//   error: null,
//   token: null
// }

const user = (state = null, { type, payload }) => {
  switch (type) {
    case actionTypes.SIGN_UP_SUCCESS:
    case actionTypes.SIGN_IN_SUCCESS:
      return payload.user;

    case actionTypes.SIGN_OUT_SUCCESS:
      return null;

    default:
      return state;
  }
};

const isAuthenticated = (state = false, { type }) => {
  switch (type) {
    case actionTypes.SIGN_UP_SUCCESS:
    case actionTypes.SIGN_IN_SUCCESS:
      return true;

    case actionTypes.SIGN_UP_ERROR:
    case actionTypes.SIGN_IN_ERROR:
    case actionTypes.SIGN_OUT_SUCCESS:
      return false;

    default:
      return state;
  }
};

const token = (state, { type, payload }) => {
  switch (type) {
    case actionTypes.SIGN_UP_SUCCESS:
    case actionTypes.SIGN_IN_SUCCESS:
      return payload.token;

    case actionTypes.SIGN_UP_ERROR:
    case actionTypes.SIGN_IN_ERROR:
    case actionTypes.SIGN_OUT_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default combineReducers({
  user,
  isAuthenticated,
  token,
});
