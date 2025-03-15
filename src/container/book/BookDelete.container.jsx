import { useDispatch } from 'react-redux';

import { deleteBook } from '../../state/book/book.slice';

import { BookDelete } from '../../components/book/BookDelete';

export const BookDeleteContainer = ({ book, onClose }) => {
  const dispatch = useDispatch();
  const handleDeleteBook = (book) => {
    dispatch(deleteBook(book));
  };

  return <BookDelete book={book} onClose={onClose} handleDeleteBook={handleDeleteBook} />;
};
