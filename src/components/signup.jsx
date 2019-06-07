import React, { Component } from 'react';
import EmailNotification from './sendEmailNotification';
import '../css/signup-style/signup-style.css';
import SocialLogin from './SocialButtons';
import Form from './form';

/**
 * @author Clet Mwunguzi
 * @returns {*} signup form
 */
class Signup extends Component {
  state = {
    data: {},
    errors: {},
    isFormSubmitted: false,
  };

  handleChangeState = (...values) => {
    this.setState(...values);
  };

  handleSubmitedForm = () => {
    this.setState({ isFormSubmitted: true });
  };

  /**
   * @author Clet Mwunguzi
   * @returns {*} signup component
   */
  render() {
    const { data, errors, isFormSubmitted } = this.state;
    return (
      <div className="aligner">
        <div className="form_wrapper">
          <h1 className="header_style">Author&apos;s Haven</h1>
          {isFormSubmitted ? (
            <EmailNotification email={data.email} />
          ) : (
            <Form
              data={data}
              errors={errors}
              stateChange={this.handleChangeState}
              isSubmitted={this.handleSubmitedForm}
            />
          )}
          <SocialLogin />
        </div>
      </div>
    );
  }
}

export default Signup;
