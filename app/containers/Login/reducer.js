/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGIN_ACTION,
  USER_TOKEN_ACTION,
  LOGIN_ERROR_ACTION,
} from './constants';

const initialState = fromJS({});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ACTION:
      return state;
    case USER_TOKEN_ACTION:
      return state.set('token', action.params.token);
    case LOGIN_ERROR_ACTION:
      return state.set('Error', fromJS(action.params));
    default:
      return state;
  }
}

export default loginReducer;
