import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { formatDate } from '../../util/util';

import { ReactComponent as CloseIcon } from '../../icons/close.svg';

import { FormInput } from '../input/FormInput';

export const BookCreate = ({ handleAddBook }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: 0,
    quantity: 0,
    publicationDate: ''
  });
  const navigate = useNavigate();

  const handleSubmit = () => {
    const bookData = {
      ...formData,
      publicationDate: formatDate(formData.publicationDate)
    };
    handleAddBook(bookData);
    navigate('/');
  };

  const handleCancel = () => {
    setFormData({
      title: '',
      author: '',
      isbn: 0,
      quantity: 0,
      publicationDate: ''
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
      <button onClick={() => navigate('/')}>
        <CloseIcon />
      </button>

      <h1>Add Book</h1>

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
          <input type="button" value="Add" onClick={handleSubmit} />
          <button type="reset" onClick={handleCancel}>
            Cancel
          </button>
        </fieldset>
      </form>
    </dialog>
  );
};
