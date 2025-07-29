import axios from 'axios';

import { getData } from '../util/api';

import { fetchMembers, setMembers } from '../state/member/member.slice';

import { all, call, put, takeLatest } from 'redux-saga/effects';

const memberPath = 'http://localhost:8080/api/members';

export function* fetchMembersSaga() {
  try {
    const responseData = yield call(axios.request, getData(memberPath));

    yield put(setMembers(responseData.data));
  } catch (error) {
    console.error(error);
  }
}

export function* watchForFetchMembersSaga() {
  yield takeLatest(fetchMembers.type, fetchMembersSaga);
}

export function* memberSaga() {
  yield all([watchForFetchMembersSaga()]);
}
