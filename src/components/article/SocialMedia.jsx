/* eslint-disable react/destructuring-assignment */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faWhatsapp,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from 'react-share';
import '../../styles/scss/article.scss';

/**
 * @description this class create the share buttons
 * @returns {*} buttons
 */
export class SocialMedia extends Component {
  /**
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = () => {
    const url = window.location.href;
    return url;
  };

  /**
   * @author Innocent Nkunzi
   * @returns {*} the buttons
   */
  render() {
    return (
      <Fragment>
        <div className="socialMedia">
          <FacebookShareButton
            url={this.onSubmit()}
            quote={this.props.article.title}
            className="facebookButton is-outlined is-rounded facebook"
          >
            <span className="faIcon">
              <FontAwesomeIcon icon={faFacebook} size="1x" />
            </span>
            <span className="text">Facebook</span>
          </FacebookShareButton>
          <TwitterShareButton
            url={this.onSubmit()}
            className="twitterButton is-outlined is-rounded facebook"
          >
            <span className="twitterIcon">
              <FontAwesomeIcon icon={faTwitter} size="1x" />
            </span>
            <span className="text">Twitter</span>
          </TwitterShareButton>
          <LinkedinShareButton
            url={this.onSubmit()}
            className="linkedinButton is-outlined is-rounded facebook"
          >
            <span className="linkedinIcon">
              <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </span>
            <span className="text">Linkedin</span>
          </LinkedinShareButton>
          <WhatsappShareButton
            url={this.onSubmit()}
            className="whatsappButton is-outlined is-rounded facebook"
          >
            <span className="whatsappIcon">
              <FontAwesomeIcon icon={faWhatsapp} size="1x" />
            </span>
            <span className="text">Whatsapp</span>
          </WhatsappShareButton>
          <EmailShareButton
            url={this.onSubmit()}
            className="emailButton is-outlined is-rounded facebook"
          >
            <span className="emailIcon">
              <FontAwesomeIcon icon={faGoogle} size="1x" />
            </span>
            <span className="text">Email</span>
          </EmailShareButton>
        </div>
      </Fragment>
    );
  }
}

export const mapStateToprops = state => ({
  article: { ...state.Article.article },
});

export default connect(mapStateToprops)(SocialMedia);
