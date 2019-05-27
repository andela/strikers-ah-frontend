import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import SocialButtons from './SocialButtons';
import '../styles/css/login.css';
import logo from '../styles/img/logo.png';
import InputForm from './common/InputForm';
import CreateAccount from './common/CreateAccount';

/**
 * @author frank harerimana
 */
class Login extends PureComponent {
  /**
   * @author frank harerimana
   * @returns {*} render component
   */
  render() {
    return (
      <div className="container">
        <div className="login-section">
          <div className="logo">
            <img src={logo} alt="authors haven" />
          </div>
          <div className="log-text">
            <form>
              <InputForm
                type="text"
                name="email"
                placeholder="Email or Username"
              />
              <input type="password" placeholder="Password" />
              <Link to="/forgotpassword" className="fo-btn">
                Forgot password
              </Link>
              <button className="login-btn" type="submit">
                Login
              </button>
            </form>
          </div>
          <SocialButtons />
          <CreateAccount />
        </div>
      </div>
    );
  }
}
export default Login;
