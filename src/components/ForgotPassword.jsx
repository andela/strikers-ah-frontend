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
  // /**
  //  * @param {*} props
  //  */
  // constructor(props) {
  //     super(props);
  //     this.button = React.createRef();
  //     this.handleChange =  this.handleChange.bind(this);
  // }

  /**
   * @author frank harerimana
   * @param {*} e
   * @returns {*} action
   */
  handleSubmit(e) {
    e.preventDefault();
    forgotPassword(e.target.value);
  }

  //  /**
  //  * @author frank harerimana
  //  * @param {*} e
  //  * @returns {*} validate
  //  */
  // handleChange(e){
  //     e.preventDefault();
  //     const email = e.target.value.toLowerCase()
  //     const ex = /\S+@\S+\.\S+/;
  //     const valid = ex.test(email);
  //     if (valid === false) {
  //         this.button.current.style.disabled='false';
  //        console.log(email);
  //     }

  // }

  /**
   * @author frank
   * @returns {*} render
   */
  render() {
    return (
      <div className="container">
        <div className="login-section">
          <div className="logo">
            <img src={logo} alt="authors haven" />
          </div>
          <div className="log-text">
            <form method="post" onSubmit={this.handlerSubmit}>
              <InputForm
                type="email"
                name="email"
                placeholder="Email or Username"
                required
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
  userProfile: state.userProfile,
});

export default connect(
  mapStateToProps,
  { forgotPassword },
)(ForgotPassword);
