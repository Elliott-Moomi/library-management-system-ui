import { useDispatch } from 'react-redux';

import { addBook } from '../../state/book/book.slice';

import { BookCreate } from '../../components/book/BookCreate';

export const BookCreateContainer = () => {
  const dispatch = useDispatch();
  const handleAddBook = (book) => {
    dispatch(addBook(book));
  };

  return <BookCreate handleAddBook={handleAddBook} />;
};
