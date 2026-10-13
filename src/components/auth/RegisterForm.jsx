import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FormInput } from '../input/FormInput';

import './auth.scss';

export const RegisterForm = ({ handleRegister }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = () => {
    handleRegister(formData);
  };

  const handleCancel = () => {
    setFormData({
      username: '',
      password: ''
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
    <dialog className="auth" open>
      <h1>Create Account</h1>

      <form>
        <FormInput
          id="username"
          label="Username:"
          value={formData.username}
          onChange={handleChange}
        />

        <FormInput
          id="password"
          label="Password:"
          value={formData.password}
          onChange={handleChange}
        />

        <fieldset>
          <input type="button" value="Register" onClick={handleSubmit} />
          <input type="button" value="Cancel" onClick={handleCancel} />
        </fieldset>
      </form>
      <p className="auth-link">
        Already have an account? <Link to="/login">Sign in</Link>{' '}
      </p>
    </dialog>
  );
};
