import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FormInput } from '../input/FormInput';

import './auth.scss';

export const LoginForm = ({ handleLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = () => {
    handleLogin(formData);
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
      <h1>Login</h1>

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
          <input type="button" value="Login" onClick={handleSubmit} />
          <input type="button" value="Cancel" onClick={handleCancel} />
        </fieldset>
        <p className="auth-link">
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </form>
    </dialog>
  );
};
