import React from 'react';

const InputForm = ({ type, name, placeholder, ...props }) => (
  <input type={type} name={name} placeholder={placeholder} {...props} />
);

export default InputForm;
