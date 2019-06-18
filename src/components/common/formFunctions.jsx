import { Component } from 'react';
import Joi from 'joi-browser';

/**
 * @author Clet Mwunguzi
 * @returns {*} errors
 */
class FormFunctions extends Component {
  /**
   * @author Clet Mwunguzi
   * @returns {*} data
   */
  validate = () => {
    const { data } = this.props;
    const { error } = Joi.validate(data, this.schema, { abortEarly: false });

    if (!error) return null;
    const errors = {};

    // eslint-disable-next-line no-restricted-syntax
    for (const item of error.details) {
      errors[item.path[0]] = item.message;
      if (
        item.path[0] === 'password' &&
        item.message !== '"password" is required'
      ) {
        errors[item.path[0]] =
          '"Password" should be at 8 charcters minimum , with one capital letter, one special character, and a number';
      }
    }

    return errors;
  };

  // eslint-disable-next-line consistent-return
  handleSubmit = e => {
    const { stateChange } = this.props;
    e.preventDefault();

    const error = this.validate();
    stateChange({ errors: error || {} });
    if (error) return null;
    this.submit();
  };

  handleChange = ({ currentTarget }) => {
    const { errors, stateChange } = this.props;
    const message = this.validateInput(currentTarget);
    if (message) errors[currentTarget.name] = message;
    else delete errors[currentTarget.name];

    const { data } = this.props;
    data[currentTarget.name] = currentTarget.value;
    stateChange({ data, errors });
  };

  /**
   * @author Clet Mwunguzi
   * @returns {*} data or errors
   */
  validateInput({ name, value }) {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);

    if (name === 'password' && error === null) {
      return null;
    }

    if (
      name === 'password' &&
      error.details[0].message !== '"password" is not allowed to be empty'
    ) {
      return ' "Password" should be at least 8 characters minimum , with one capital letter, one special character, and a number';
    }

    return error ? error.details[0].message : null;
  }
}

export default FormFunctions;
