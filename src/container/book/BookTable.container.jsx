import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchBooks } from '../../state/book/book.slice';

import { BookTable } from '../../components/book/BookTable';

export const BookTableContainer = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return <BookTable books={books} />;
};
