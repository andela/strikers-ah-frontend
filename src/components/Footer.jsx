/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import '../styles/css/footer.css';

/**
 * footer
 */
class Footer extends Component {
  /**
   * @returns {*} render
   */
  render() {
    return (
      <div className="footer">
        <p className="copyright">
          Authors Haven All Rights Reserved &#169; 2019
        </p>
      </div>
    );
  }
}

export default Footer;
