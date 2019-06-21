/* eslint-disable import/no-named-as-default */
/* eslint-disable react/destructuring-assignment */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FollowButton from '../common/FollowButton';
// import BookmarkButton from '../common/BookmarkButton';
import getReadingTime from '../../helpers/getReadingTime';

/**
 * @author Innocent Nkunzi
 * @param {*} props
 * @returns {*} authors
 */
export const Author = props => {
  const { article } = props;
  return (
    <Fragment>
      <div className="author-info center-text">
        <span className="author">
          <Link to={`/${article.username}`}>@{article.username}</Link> |{' '}
          <FollowButton className="onReadArticle" />
        </span>{' '}
        |
        <span className="date">
          {' '}
          Apr 14 . {`${getReadingTime(article.body)} min Read`}
        </span>
        <span> </span>
      </div>
    </Fragment>
  );
};

const mapStateToprops = state => ({
  article: { ...state.Article.article },
});

export default connect(mapStateToprops)(Author);
