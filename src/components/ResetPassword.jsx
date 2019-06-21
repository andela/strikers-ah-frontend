/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { connect } from 'react-redux';
// import queryString from 'query-string';
import InputForm from './common/InputForm';
import logo from '../styles/img/logo.png';
import { resetPassword } from '../redux/actions/forgotPassword';
import bgOne from '../styles/img/backgound-one.jpg';
import bgTwo from '../styles/img/background-two.jpg';
import bgThree from '../styles/img/background-three.jpg';
import SubmitButton from './common/SubmitButton';

/**
 * Forgot Password Form
 */
export class ResetPassword extends Component {
  /**
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      token: this.checkToken(),
    };

    const bgImages = [bgOne, bgTwo, bgThree];
    this.bgImage = bgImages[Math.floor(Math.random() * bgImages.length)];
  }

  /**
   *
   *@param {*} message
   * @memberof ResetPassword
   * @returns {*} popup
   */
  popUpResponse = message => {
    if (message !== '') {
      return swal(
        message === 'success' ? 'Email sent to your account' : 'Try again',
        message === 'success' ? 'Please check your email' : message,
        message === 'success' ? 'success' : 'info',
      );
    }
  };

  /**
   * @author frank harerimana
   * @returns {*} token
   */
  checkToken = () => {
    const url = this.props.match;
    const { token } = url.params;
    return token;
  };

  /**
   * @author frank harerimana
   * @param {*} e
   * @returns {*} action
   */
  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  /**
   * @author frank harerimana
   * @param {*} e
   * @returns {*} action
   */
  handleSubmit = async e => {
    e.preventDefault();
    const password = this.state.value;
    const { token } = this.state;
    await this.props.resetPassword(password, token);
    let message = '';
    if (this.props.forgetPasswordState) {
      const { response } = this.props.forgetPasswordState;
      message = response ? response.message : '';
      if (response.data) {
        this.popUpResponse('Password Updated successfully');
        setTimeout(() => {
          return (window.location.href = '/login');
        }, 2000);
      }
      this.popUpResponse(message);
    }
  };

  /**
   * @author frank
   * @returns {*} render
   */
  render() {
    return (
      <div
        className="aligner"
        style={{ backgroundImage: `url(${this.bgImage})` }}
      >
        <div className="form_wrapper">
          <div className="header_style">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div id="fogetpasswordFormAlign" className="log-text">
            <form
              id="resetPasswordForm"
              className="signup_form_style"
              onSubmit={this.handleSubmit}
            >
              <InputForm
                type="password"
                name="password"
                placeholder="Enter your new password here"
                required
                onChange={this.handleChange}
                value={this.state.value}
              />
              <Link to="/login" id="fo-btn">
                Back To Login
              </Link>
              <SubmitButton
                onclick={this.handleSubmit}
                className="login-btn"
                id="btn"
                type="submit"
                value="Reset Password"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export const mapStateToProps = state => ({
  forgetPasswordState: state.forgotPassword,
});

export default connect(
  mapStateToProps,
  { resetPassword },
)(ResetPassword);
