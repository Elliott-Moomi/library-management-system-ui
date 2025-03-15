import React, { useMemo, useState } from 'react';

import { BookDeleteContainer } from '../../container/book/BookDelete.container';
import { BookEditContainer } from '../../container/book/BookEdit.container';

import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import { ReactComponent as EditIcon } from '../../icons/edit.svg';
import { ReactComponent as ViewIcon } from '../../icons/view.svg';

import { BookDetail } from './BookDetail';

export const BookRows = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [dialogType, setDialogType] = useState('');

  const handleOpenDialog = (book, type) => {
    setSelectedBook(book);
    setDialogType(type);
  };

  const handleCloseDialog = () => {
    setSelectedBook(null);
    setDialogType('');
  };

  const rows = useMemo(() => {
    return books.map((book) => (
      <tr key={book.id}>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.isbn}</td>
        <td>{book.quantity}</td>
        <td>{book.publicationDate}</td>
        <td>
          <button onClick={() => handleOpenDialog(book, 'view')}>
            <ViewIcon />
          </button>
        </td>
        <td>
          <button onClick={() => handleOpenDialog(book, 'edit')}>
            <EditIcon />
          </button>
        </td>
        <td>
          <button onClick={() => handleOpenDialog(book, 'delete')}>
            <DeleteIcon />
          </button>
        </td>
      </tr>
    ));
  }, [books]);

  return (
    <>
      {selectedBook && dialogType === 'edit' && (
        <BookEditContainer book={selectedBook} onClose={handleCloseDialog} />
      )}
      {selectedBook && dialogType === 'view' && (
        <BookDetail book={selectedBook} onClose={handleCloseDialog} />
      )}
      {selectedBook && dialogType === 'delete' && (
        <BookDeleteContainer book={selectedBook} onClose={handleCloseDialog} />
      )}
      {rows}
    </>
  );
};
