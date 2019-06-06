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
    for (const item of error.details) errors[item.path[0]] = item.message;

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
    return error ? error.details[0].message : null;
  }
}

export default FormFunctions;
