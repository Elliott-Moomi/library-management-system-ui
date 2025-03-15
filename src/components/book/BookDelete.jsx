import React from 'react';

import { ReactComponent as CloseIcon } from '../../icons/close.svg';

export const BookDelete = ({ book, onClose, handleDeleteBook }) => {
  const handleSubmit = () => {
    handleDeleteBook(book.id);

    alert('Book has been deleted successfully!');
    onClose();
  };

  return (
    <dialog className={'delete'} open>
      <button onClick={onClose}>
        <CloseIcon />
      </button>

      <h1>Remove Book</h1>
      <p>
        Are you sure that you would like to remove "{book.title}"? This action cannot be undone.
      </p>
      <button onClick={handleSubmit}>Confirm</button>
      <button onClick={onClose}>Cancel</button>
    </dialog>
  );
};
