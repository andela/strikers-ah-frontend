/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import InputForm from './common/InputForm';
import logo from '../styles/img/logo.png';
import { forgotPassword } from '../redux/actions/forgotPassword';
import '../styles/css/signup-style/signup-style.css';
import bgOne from '../styles/img/backgound-one.jpg';
import bgTwo from '../styles/img/background-two.jpg';
import bgThree from '../styles/img/background-three.jpg';
import SubmitButton from './common/SubmitButton';

/**
 * Forgot Password Form
 */
export class ForgotPassword extends Component {
  /**
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    const bgImages = [bgOne, bgTwo, bgThree];
    this.bgImage = bgImages[Math.floor(Math.random() * bgImages.length)];
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
      <div
        className="aligner"
        style={{ backgroundImage: `url(${this.bgImage})` }}
      >
        <div className="form_wrapper">
          <div className="header_style">
            <a href="/">
              <img src={logo} alt="Logo" className="logo" />
            </a>
          </div>

          <div id="fogetpasswordFormAlign" className="log-text">
            <p>{message}</p>
            <form
              id="forgotPasswordForm"
              className="signup_form_style"
              onSubmit={this.handleSubmit}
            >
              <InputForm
                type="email"
                name="email"
                placeholder="Email or Username"
                required
                onChange={this.handleChange}
                value={this.state.value}
              />
              <Link to="/login" id="fo-btn">
                Back To Login
              </Link>
              <SubmitButton
                id="forgetPasswordSubmitBtn"
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
