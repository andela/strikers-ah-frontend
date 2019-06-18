import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login as loginAction } from '../actions/login.actions';
import { valueChange } from '../actions/loginForm';
import Input from './common/input';
import '../styles/css/signup-style/signup-style.css';
import bgOne from '../styles/img/backgound-one.jpg';
import bgTwo from '../styles/img/background-two.jpg';
import bgThree from '../styles/img/background-three.jpg';
import logo from '../styles/img/logo.png';
import SocialButtons from './SocialButtons';

/**
 * @author frank harerimana
 * @returns {*} logged in user
 */
export class Login extends PureComponent {
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

    const bgImages = [bgOne, bgTwo, bgThree];
    this.bgImage = bgImages[Math.floor(Math.random() * bgImages.length)];
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
      window.location = '/';
      return;
      // return <Redirect to="/" />;
    }

    return (
      <div
        className="aligner"
        style={{ backgroundImage: `url(${this.bgImage})` }}
      >
        <div className="form_wrapper">
          <div className="header_style">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="log-text">
            <form
              className="signup_form_style"
              onSubmit={this.handleSubmit}
              style={{ paddingBottom: '100px' }}
            >
              <Input
                labelStyle="text_inputs"
                name="email"
                type="text"
                inputStyle="textboxStyle"
                label="Email"
                borderStyle="border"
                innerLabelStyle="label"
                onChange={this.handleChange}
                error={errors}
                errorStyle="errorStyle"
                value={email}
              />
              <br />
              {submitted && !email && (
                <div className="help-block">Email is required</div>
              )}
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
                value={password}
              />
              <br />
              {submitted && !password && (
                <div className="help-block">Password is required</div>
              )}
              <div className="help-block">
                {Object.keys(errors).length > 0 && `Invalid email or password`}
              </div>
              <input type="submit" value="Login" className="button_style" />
              <div className="login-action-links">
                <Link to="/forgotpassword">Forgot password?</Link>
                &nbsp;&nbsp; | &nbsp;&nbsp;
                <Link to="/signup">Signup</Link>
              </div>
            </form>
          </div>
          <SocialButtons />
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
