import { useDispatch } from 'react-redux';

import { editBook } from '../../state/book/book.slice';

import { BookEdit } from '../../components/book/BookEdit';

export const BookEditContainer = ({ book, onClose }) => {
  const dispatch = useDispatch();
  const handleEditBook = (book) => {
    dispatch(editBook(book));
  };

  return <BookEdit book={book} onClose={onClose} handleEditBook={handleEditBook} />;
};
