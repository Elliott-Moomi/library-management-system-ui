import axios from 'axios';

import { getData, postData, putData, removeData } from '../util/api';

import { addBook, deleteBook, editBook, fetchBooks, setBooks } from '../state/book/book.slice';

import { all, call, put, takeLatest } from 'redux-saga/effects';

const bookPath = 'http://localhost:8080/api/books';

export function* addBookSaga({ payload }) {
  try {
    yield call(axios.request, postData(bookPath, payload));
  } catch (error) {
    console.error(error);
  }
}

export function* watchForAddBook() {
  yield takeLatest(addBook.type, addBookSaga);
}

export function* fetchBooksSaga() {
  try {
    const responseData = yield call(axios.request, getData(bookPath));

    yield put(setBooks(responseData.data));
  } catch (error) {
    console.error(error);
  }
}

export function* watchForFetchBooksSaga() {
  yield takeLatest(fetchBooks.type, fetchBooksSaga);
}

export function* editBookSaga({ payload }) {
  try {
    yield call(axios.request, putData(bookPath, payload));
  } catch (error) {
    console.error(error);
  }
}

export function* watchForEditBook() {
  yield takeLatest(editBook.type, editBookSaga);
}

export function* deleteBookSaga({ payload }) {
  try {
    yield call(axios.request, removeData(bookPath, payload));
  } catch (error) {
    console.error(error);
  }
}

export function* watchForDeleteBook() {
  yield takeLatest(deleteBook.type, deleteBookSaga);
}

export function* bookSaga() {
  yield all([
    watchForAddBook(),
    watchForFetchBooksSaga(),
    watchForEditBook(),
    watchForDeleteBook()
  ]);
}
