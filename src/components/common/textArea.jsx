import React from 'react';

const TextArea = ({
  name,
  label,
  value,
  handleChange,
  placeholder,
  ...rest
}) => {
  return (
    <div className="input-container">
      {label && <span className="text-area-label">{label}</span>}
      <textarea
        className="bio-area"
        id={`${name}`}
        name={name}
        {...rest}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        test-data="textAreaComponent"
      />
    </div>
  );
};

export default TextArea;
