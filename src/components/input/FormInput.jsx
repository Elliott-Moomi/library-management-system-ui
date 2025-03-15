import React from 'react';

export const FormInput = ({ id, label, type = 'text', value, onChange }) => {
  return (
    <fieldset>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} value={value} onChange={onChange} required />
    </fieldset>
  );
};
