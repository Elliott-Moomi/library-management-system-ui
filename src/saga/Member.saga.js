import axios from 'axios';

import { getData, postData, putData } from '../util/api';

import { addMember, editMember, fetchMembers, setMembers } from '../state/member/member.slice';

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

export function* editMemberSaga({ payload }) {
  try {
    console.log('my edit data', payload);
    yield call(axios.request, putData(memberPath, payload));
  } catch (error) {
    console.error(error);
  }
}

export function* watchForEditMemberSaga() {
  yield takeLatest(editMember.type, editMemberSaga);
}

export function* memberSaga() {
  yield all([watchForFetchMembersSaga(), watchForAddBookSaga(), watchForEditMemberSaga()]);
}
