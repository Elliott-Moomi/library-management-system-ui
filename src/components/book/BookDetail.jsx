import React from 'react';

import { ReactComponent as CloseIcon } from '../../icons/close.svg';

import '../../stylesheet/item-detail.scss';

export const BookDetail = ({ book, onClose }) => {
  return (
    <dialog open>
      <button onClick={onClose}>
        <CloseIcon />
      </button>

      <h1>{book.title}</h1>
      <dl>
        <dt>ID:</dt>
        <dd>{book.id}</dd>

        <dt>Title:</dt>
        <dd>{book.title}</dd>

        <dt>Author:</dt>
        <dd>{book.author}</dd>

        <dt>ISBN:</dt>
        <dd>{book.isbn}</dd>

        <dt>Quantity:</dt>
        <dd>{book.quantity}</dd>

        <dt>Publication Date:</dt>
        <dd>{book.publicationDate}</dd>
      </dl>
    </dialog>
  );
};
