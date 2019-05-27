/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';
import InputForm from './common/InputForm';
import logo from '../styles/img/logo.png';
import { resetPassword } from '../redux/actions/forgotPassword';
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
      token: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * @author frank
   * @returns {*} state
   */
  componentWillMount() {
    const url = this.props.location.search;
    const params = queryString.parse(url);
    if (params.token != null) {
      this.setState({ token: params.token });
    }
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
    const password = this.state.value;
    const { token } = this.state;
    this.props.resetPassword(password, token);
  }

  /**
   * @author frank
   * @returns {*} render
   */
  render() {
    // eslint-disable-next-line no-unused-vars
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
            <form id="resetPasswordForm" onSubmit={this.handleSubmit}>
              <InputForm
                type="password"
                name="password"
                placeholder="enter your password here"
                required
                onChange={this.handleChange}
                value={this.state.value}
              />
              <Link to="/login" className="fo-btn">
                Back To Login
              </Link>
              <SubmitButton
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
const mapStateToProps = state => ({
  forgetPasswordState: state.forgotPassword,
});

export default connect(
  mapStateToProps,
  { resetPassword },
)(ResetPassword);
