import React, { Fragment } from 'react';
import heart from '../../styles/img/heart.svg';
import bookmark from '../../styles/img/bookmark.svg';
import facebook from '../../styles/img/facebook.svg';
import linked from '../../styles/img/linked-in.svg';
import twitter from '../../styles/img/twitter.svg';

const SocialMedia = () => {
  return (
    <Fragment>
      <div className="article-icons center-text">
        <img src={heart} alt="Like" className="icon" />
        <img src={bookmark} alt="bookmark" className="icon" />
        <img src={facebook} alt="share on facebook" className="icon" />
        <img src={linked} alt="share on linked-in" className="icon" />
        <img src={twitter} alt="share on twitter" className="icon" />
      </div>
    </Fragment>
  );
};

export default SocialMedia;
