import React, { PureComponent } from 'react';
import SocialButtons from './SocialButtons';
import '../styles/css/login.css';
import logo from '../styles/img/logo.png';

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
              <input type="text" placeholder="Email or Username" />
              <input type="password" placeholder="Password" />
              <a href="false" className="fo-btn">
                Forgot password
              </a>
              <button className="login-btn" type="submit">
                Login
              </button>
            </form>
          </div>
          <SocialButtons />
        </div>
      </div>
    );
  }
}
export default Login;
