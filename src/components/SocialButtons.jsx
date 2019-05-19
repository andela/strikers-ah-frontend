import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGooglePlus,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

class SocialLogin extends PureComponent {
  render() {
    return (
      <div className="log-btn">
        <div className="title-login">
          <p>Sign-in with</p>
        </div>
        <div className="login-button-section">
          <div className="social-login-btn">
            <a
              className="social-btn"
              href="http://localhost:5000/api/auth/github"
            >
              <FontAwesomeIcon className="fa-github fa-2x" icon={faGithub} />
            </a>
          </div>
          <div className="social-login-btn">
            <a
              className="social-btn"
              href="http://localhost:5000/api/auth/twitter"
            >
              <FontAwesomeIcon className="fa-twitter fa-2x" icon={faTwitter} />
            </a>
          </div>
          <div className="social-login-btn">
            <a
              className="social-btn"
              href="http://localhost:5000/api/auth/facebook"
            >
              <FontAwesomeIcon
                className="fa-facebook-f fa-2x"
                icon={faFacebook}
              />
            </a>
          </div>
          <div className="social-login-btn">
            <a
              className="social-btn"
              href="http://localhost:5000/api/auth/google"
            >
              <FontAwesomeIcon
                className="fa-google-plus-g fa-2x"
                icon={faGooglePlus}
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default SocialLogin;
