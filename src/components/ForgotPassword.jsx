/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import InputForm from './common/InputForm';
import logo from '../styles/img/logo.png';
import { forgotPassword } from '../redux/actions/userAction';
import SubmitButton from './common/SubmitButton';

/**
 * Forgot Password Form
 */
class ForgotPassword extends Component {
  /**
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * @author frank harerimana
   * @param {*} e
   * @returns {*} action
   */
  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  /**
   * @author frank harerimana
   * @param {*} e
   * @returns {*} action
   */
  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state.value);
    const email = this.state.value;
    this.props.forgotPassword(email);
  }

  /**
   * @author frank
   * @returns {*} render
   */
  render() {
    let message = '';
    if (this.props.forgetPasswordState) {
      const { response } = this.props.forgetPasswordState;
      message = response ? response.message : '';
    }
    return (
      <div className="container">
        <div className="login-section">
          <div className="logo">
            <img src={logo} alt="authors haven" />
          </div>
          <div className="log-text">
            <p>{message}</p>
            <form onSubmit={this.handleSubmit}>
              <InputForm
                type="email"
                name="email"
                placeholder="Email or Username"
                required
                onChange={this.handleChange}
                value={this.state.value}
              />
              <Link to="/login" className="fo-btn">
                Back To Login
              </Link>
              <SubmitButton
                className="login-btn"
                type="submit"
                value="Forgot Password"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  forgetPasswordState: state.forgotPassword,
});

export default connect(
  mapStateToProps,
  { forgotPassword },
)(ForgotPassword);
