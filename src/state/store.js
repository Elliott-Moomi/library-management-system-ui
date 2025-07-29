import { configureStore } from '@reduxjs/toolkit';

import { rootSaga } from '../saga/rootSaga';
import createSagaMiddleware from 'redux-saga';

import bookReducer from './book/book.slice';
import membersReducer from './member/member.slice';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    books: bookReducer,
    members: membersReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);
export default store;
