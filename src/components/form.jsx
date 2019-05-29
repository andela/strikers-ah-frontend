import React from 'react';
import Joi from 'joi-browser';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Input from './common/input';
import FormFunctions from './common/formFunctions';
import '../styles/css/signup-style/signup-style.css';

/**
 * @author Clet Mwunguzi
 * @returns {*} form component
 */
class Form extends FormFunctions {
  schema = {
    firstname: Joi.string()
      .trim()
      .min(2)
      .max(15)
      .required(),
    lastname: Joi.string()
      .trim()
      .min(2)
      .max(15)
      .required(),
    username: Joi.string()
      .alphanum()
      .trim()
      .min(3)
      .max(10)
      .required(),
    email: Joi.string()
      .trim()
      .email()
      .required(),
    password: Joi.string()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})/)
      .required(),
  };

  submit = async () => {
    const { data: userInfo } = this.props;
    const URL = 'https://strikers-ah-backend.herokuapp.com/api/auth/signup';

    try {
      const { data } = await axios.post(URL, userInfo);
      if (data) this.props.isSubmitted();
    } catch ({ response }) {
      const obj = {};
      const { error } = response.data;
      const splitError = error.split(' ')[0];
      if (splitError === 'email' || splitError === 'username') {
        obj[splitError] = error;
        this.props.stateChange({ errors: obj });
      } else {
        this.props.stateChange({ errors: response.data });
      }
    }
  };

  /**
   * @author Clet Mwunguzi
   * @returns {*} input fields
   */
  render() {
    const { errors } = this.props;

    return (
      <form className="signup_form_style" onSubmit={this.handleSubmit}>
        <Input
          labelStyle="text_inputs"
          name="firstname"
          inputStyle="textboxStyle"
          label="First Name"
          borderStyle="border"
          innerLabelStyle="label"
          onChange={this.handleChange}
          error={errors}
          errorStyle="errorStyle"
        />

        <br />

        <Input
          labelStyle="text_inputs"
          name="lastname"
          inputStyle="textboxStyle"
          label="Last Name"
          borderStyle="border"
          innerLabelStyle="label"
          onChange={this.handleChange}
          error={errors}
          errorStyle="errorStyle"
        />

        <br />

        <Input
          labelStyle="text_inputs"
          name="username"
          inputStyle="textboxStyle"
          label="User Name"
          borderStyle="border"
          innerLabelStyle="label"
          onChange={this.handleChange}
          error={errors}
          errorStyle="errorStyle"
        />

        <br />

        <Input
          labelStyle="text_inputs"
          name="email"
          inputStyle="textboxStyle"
          label="Email"
          borderStyle="border"
          innerLabelStyle="label"
          onChange={this.handleChange}
          error={errors}
          errorStyle="errorStyle"
        />

        <br />

        <Input
          labelStyle="text_inputs"
          name="password"
          type="password"
          inputStyle="textboxStyle"
          label="Password"
          borderStyle="border"
          onChange={this.handleChange}
          innerLabelStyle="label"
          error={errors}
          errorStyle="errorStyle"
        />

        <br />
        <span className="errorStyle AfterSubmitError">{errors.error}</span>
        <input type="submit" value="Sign Up" className="button_style" />
        <Link to="/login">
          Already have an account? <span>SIGN IN</span>
        </Link>
      </form>
    );
  }
}

export default Form;