import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as CloseIcon } from '../../icons/close.svg';

import { FormInput } from '../input/FormInput';

export const MemberCreate = ({ handleAddMember }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: 0,
    email: '',
    contact: '',
    books: []
  });
  const navigate = useNavigate();

  const handleSubmit = () => {
    handleAddMember(FormData);
    navigate('/members');
  };

  const handleCancel = () => {
    setFormData({
      firstName: '',
      lastName: '',
      age: 0,
      email: '',
      contact: '',
      books: []
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
      <button onClick={() => navigate('/members')}>
        <CloseIcon />
      </button>

      <h1>Add member</h1>

      <form>
        <FormInput
          id="firstName"
          label="First Name:"
          value={formData.firstName}
          onChange={handleChange}
        />

        <FormInput
          id="lastName"
          label="Last Name:"
          value={formData.lastName}
          onChange={handleChange}
        />

        <FormInput
          id="age"
          label="Age:"
          type="number"
          value={formData.age}
          onChange={handleChange}
        />

        <FormInput
          id="email"
          label="Email:"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />

        <FormInput id="contact" label="Contact:" value={formData.contact} onChange={handleChange} />

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
