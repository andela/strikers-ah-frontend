import React, { PureComponent } from 'react';
import { Link , Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import SocialButtons from './SocialButtons';
import { login as loginAction } from '../actions/login.actions';
import { valueChange } from '../actions/loginForm';
import '../styles/css/login.css';
import logo from '../styles/img/logo.png';
import InputForm from './common/InputForm';
import CreateAccount from './common/CreateAccount';

/**
 * @author frank harerimana
 */
class Login extends PureComponent {
  /**
   * @author Jacques Nyilinkindi
   * @returns {*} Constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    // reset login status

    this.state = {
      // eslint-disable-next-line react/no-unused-state
      user: {},
      // eslint-disable-next-line react/no-unused-state
      errors: {},
      // eslint-disable-next-line react/no-unused-state
      values: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * @author Jacques Nyilinkindi
   * @returns {*} State
   * @param {Object} e
   */
  handleChange(e) {
    const { name, value } = e.target;
    const { valueChange: changeValue } = this.props;
    changeValue({ [name]: value });
  }

  /**
   * @author Jacques Nyilinkindi
   * @returns {*} State
   * @param {Object} e
   */
  handleSubmit(e) {
    e.preventDefault();

    const { loginAction: accountLogin } = this.props;
    const { values } = this.props;
    const { email, password } = values;

    if (email && password) {
      accountLogin(email, password);
    }
    this.setState({ submitted: true });
  }

  /**
   * @author frank harerimana
   * @returns {*} render component
   */
  render() {
    const { submitted } = this.state;
    const { values: propValues, login: propLogin } = this.props;
    const { email, password } = propValues;
    const { errors } = propLogin;
    // eslint-disable-next-line react/destructuring-assignment
    if (this.props.login.user.user) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <div className="login-section">
          <div className="logo">
            <img src={logo} alt="authors haven" />
          </div>
          <div className="log-text">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              {submitted && !email && (
                <div className="help-block">Email is required</div>
              )}
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
              {submitted && !password && (
                <div className="help-block">Password is required</div>
              )}
              <a href="false" className="fo-btn">
                Forgot password
              </a>
              <button type="submit" className="login-btn">
                Login
              </button>
            </form>
            {Object.keys(errors).length > 0 && (
              <div className="alert">
                <strong>Opps! </strong> Invalid email or password
              </div>
            )}
          </div>
          <SocialButtons />
          <CreateAccount />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  login: state.userLogin,
  values: state.valueChange,
});

export default connect(
  mapStateToProps,
  { loginAction, valueChange },
)(Login);
