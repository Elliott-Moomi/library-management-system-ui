import axios from 'axios';

import { getData, postData } from '../util/api';

import { addMember, fetchMembers, setMembers } from '../state/member/member.slice';

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

export function* addMemberSaga({ payload }) {
  try {
    yield call(axios.request, postData(memberPath, payload));
  } catch (error) {
    console.error(error);
  }
}

export function* watchForAddBookSaga() {
  yield takeLatest(addMember.type, addMemberSaga);
}

export function* memberSaga() {
  yield all([watchForFetchMembersSaga(), watchForAddBookSaga()]);
}
