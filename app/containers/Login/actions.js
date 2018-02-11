/*
 *
 * Login actions
 *
 */

import {
  LOGIN_ACTION,
  USER_TOKEN_ACTION,
  LOGIN_ERROR_ACTION,
} from './constants';

export function loginAction(params) {
  return {
    type: LOGIN_ACTION,
    params,
  };
}
export function loginErrorAction(problem, status, data) {
  return {
    type: LOGIN_ERROR_ACTION,
    params: { problem, status, data },
  };
}

export function userTokenAction(token) {
  return {
    type: USER_TOKEN_ACTION,
    params: {
      token,
    },
  };
}
