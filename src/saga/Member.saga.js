import axios from 'axios';

import { getData, postData, putData, removeData } from '../util/api';

import {
  addMember,
  deleteMember,
  editMember,
  fetchMembers,
  setMembers
} from '../state/member/member.slice';

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

export function* watchForAddMemberSaga() {
  yield takeLatest(addMember.type, addMemberSaga);
}

export function* editMemberSaga({ payload }) {
  try {
    yield call(axios.request, putData(memberPath, payload));
  } catch (error) {
    console.error(error);
  }
}

export function* watchForEditMemberSaga() {
  yield takeLatest(editMember.type, editMemberSaga);
}

export function* deleteMemberSaga({ payload }) {
  try {
    yield call(axios.request, removeData(memberPath, payload));
  } catch (error) {
    console.error(error);
  }
}

export function* watchForDeleteMemberSaga() {
  yield takeLatest(deleteMember.type, deleteMemberSaga);
}

export function* memberSaga() {
  yield all([
    watchForFetchMembersSaga(),
    watchForAddMemberSaga(),
    watchForEditMemberSaga(),
    watchForDeleteMemberSaga()
  ]);
}
