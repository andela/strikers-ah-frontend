/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';

const Input = ({ name, label, error, handleChange, ...rest }) => {
  return (
    <div className="input-container" test-data="inputComponent">
      <input
        {...rest}
        name={name}
        autoComplete="on"
        id={name}
        className="form-input"
        onChange={handleChange}
      />
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      {error && <div className="error-div">{error}</div>}
    </div>
  );
};

export default Input;
