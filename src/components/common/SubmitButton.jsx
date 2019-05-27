/* eslint-disable react/button-has-type */
import React from 'react';

const SubmitButton = ({ type, name, value, ...props }) => (
  <button type={type} name={name} {...props}>
    {value}
  </button>
);

export default SubmitButton;
