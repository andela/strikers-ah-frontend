import React, { Component } from 'react';

/**
 * @author Clet
 */
class Input extends Component {
  state = {};

  /**
   * @author Clet
   * @returns {*} Component
   */
  render() {
    const {
      labelStyle,
      name,
      onChange,
      type = 'text',
      inputStyle,
      label,
      innerLabelStyle,
      error,
      borderStyle,
      errorStyle,
    } = this.props;
    return (
      <label htmlFor={name} className={labelStyle}>
        <input
          type={type}
          id={name}
          name={name}
          placeholder="&nbsp;"
          className={inputStyle}
          onChange={onChange}
        />
        <span className={innerLabelStyle}>{label}</span>
        <span className={borderStyle} />
        {error[name] && <span className={errorStyle}>{error[name]}</span>}
      </label>
    );
  }
}

export default Input;
