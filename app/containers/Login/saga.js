import { call, put, takeLatest } from 'redux-saga/effects';
import { LOGIN_ACTION } from './constants';
import { userTokenAction, loginErrorAction } from './actions';
import API from '../../utils/Api';

const api = API.create();

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOGIN_ACTION, loginUser);
}

export function* loginUser(params) {
  const response = yield call(
    api.postLogin,
    params.params.Email,
    params.params.Password
  );

  if (response.ok) {
    yield put(userTokenAction(response.data.token));
  } else {
    yield put(
      loginErrorAction(response.problem, response.status, response.data)
    );
  }

  console.log(response);
  console.log(params);
}
