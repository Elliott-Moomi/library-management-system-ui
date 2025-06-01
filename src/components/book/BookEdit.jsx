import React, { useState } from 'react';

import { formatDate } from '../../util/util';

import { ReactComponent as CloseIcon } from '../../icons/close.svg';

import { FormInput } from '../input/FormInput';

export const BookEdit = ({ book, onClose, handleEditBook }) => {
  const [formData, setFormData] = useState({
    id: book.id,
    title: book.title,
    author: book.author,
    isbn: book.isbn,
    quantity: book.quantity,
    publicationDate: book.publicationDate
  });

  const handleSubmit = () => {
    const bookData = {
      ...formData,
      publicationDate: formatDate(formData.publicationDate)
    };
    handleEditBook(bookData);
  };

  const handleCancel = () => {
    setFormData({
      id: book.id,
      title: book.title,
      author: book.author,
      isbn: book.isbn,
      quantity: book.quantity,
      publicationDate: book.publicationDate
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <dialog open>
      <button onClick={onClose}>
        <CloseIcon />
      </button>

      <h1>Edit Book</h1>

      <form>
        <FormInput id="title" label="Title:" value={formData.title} onChange={handleChange} />

        <FormInput id="author" label="Author:" value={formData.author} onChange={handleChange} />

        <FormInput
          id="isbn"
          label="Isbn:"
          type="number"
          value={formData.isbn}
          onChange={handleChange}
        />

        <FormInput
          id="quantity"
          label="Quantity:"
          type="number"
          value={formData.quantity}
          onChange={handleChange}
        />

        <FormInput
          id="publicationDate"
          label="Publication Date:"
          type="date"
          value={formData.publicationDate}
          onChange={handleChange}
        />

        <fieldset>
          <input type="button" value="Submit" onClick={handleSubmit} />
          <button type="reset" onClick={handleCancel}>
            Cancel
          </button>
        </fieldset>
      </form>
    </dialog>
  );
};
