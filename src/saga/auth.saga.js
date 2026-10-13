import axios from 'axios';

import { postData } from '../util/api';

import { registerFailure, registerRequest, registerSuccess } from '../state/auth/auth.slice';

import { all, call, put, takeLatest } from 'redux-saga/effects';

const authPath = 'http://localhost:8080/api/register';

function* registerUserSaga({ payload }) {
  try {
    const response = yield call(axios.request, postData(authPath, payload));

    console.log('register response', response);
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
  yield all([watchRegisterUserSaga()]);
}
