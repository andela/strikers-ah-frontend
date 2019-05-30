import React, { Fragment } from 'react';
import FollowButton from '../common/FollowButton';

/**
 * @author Innocent Nkunzi
 * @returns {*} authors
 */
const Author = () => {
  return (
    <Fragment>
      <div className="author-info center-text">
        <span className="author">Innocent Nkunzi</span> |
        <span className="date"> Apr 14 . 4min read</span>
        <span> </span>
        <FollowButton className="onReadArticle" />
      </div>
    </Fragment>
  );
};

export default Author;
