import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGooglePlus,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

/**
 * Social login component
 */
class SocialLogin extends PureComponent {
  /**
   * @author frank harerimana
   * @param {*} party
   * @returns {*} social action
   */
  handlerClick(party) {
    this.action = party;
    return `http://localhost:5000/api/auth/${this.action}`;
  }

  /**
   * @author frank harerimana
   * @returns {*} component
   */
  render() {
    return (
      <div className="log-btn">
        <div className="login-button-section">
          <div className="social-login-btn">
            <a className="social-btn" href={`${this.handlerClick('github')}`}>
              <FontAwesomeIcon className="fa-github fa-2x" icon={faGithub} />
            </a>
          </div>
          <div className="social-login-btn">
            <a className="social-btn" href={`${this.handlerClick('twitter')}`}>
              <FontAwesomeIcon className="fa-twitter fa-2x" icon={faTwitter} />
            </a>
          </div>
          <div className="social-login-btn">
            <a className="social-btn" href={`${this.handlerClick('facebook')}`}>
              <FontAwesomeIcon
                className="fa-facebook-f fa-2x"
                icon={faFacebook}
              />
            </a>
          </div>
          <div className="social-login-btn">
            <a className="social-btn" href={`${this.handlerClick('google')}`}>
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
