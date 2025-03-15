import { bookSaga } from './book.saga';
import { all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([bookSaga()]);
}
