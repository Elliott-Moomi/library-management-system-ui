import { authRequest } from '../util/api';
import { API_HOST } from '../util/util';

import {
  loginFailure,
  loginRequest,
  loginSuccess,
  registerFailure,
  registerRequest,
  registerSuccess
} from '../state/auth/auth.slice';

import { all, call, put, takeLatest } from 'redux-saga/effects';

const authPath = API_HOST;

function* loginSaga({ payload }) {
  try {
    const response = yield call(authRequest, `${authPath}login`, payload);
    document.cookie = `lmsToken=${response.data}; path=/`;

    yield put(loginSuccess(response));
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      'Login failed, please try again';
    yield put(loginFailure(message));
  }
}

export function* watchLoginSaga() {
  yield takeLatest(loginRequest.type, loginSaga);
}

function* registerUserSaga({ payload }) {
  try {
    const response = yield call(authRequest, `${authPath}register`, payload);

    yield put(registerSuccess(response));
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      'Registration failed, please try again';
    yield put(registerFailure(message));
  }
}

export function* watchRegisterUserSaga() {
  yield takeLatest(registerRequest.type, registerUserSaga);
}

export function* authSaga() {
  yield all([watchRegisterUserSaga(), watchLoginSaga()]);
}
