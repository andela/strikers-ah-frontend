/* eslint-disable import/no-named-as-default */
/* eslint-disable react/destructuring-assignment */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import FollowButton from '../common/FollowButton';
import BookmarkButton from '../common/BookmarkButton';

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
          @{article.username} | <FollowButton className="onReadArticle" />
        </span>{' '}
        | <span className="date"> Apr 14 . 4min read</span> |{' '}
        <BookmarkButton article={article} className="bookmarkIcon" />
      </div>
    </Fragment>
  );
};

const mapStateToprops = state => ({
  article: { ...state.Article.article },
});

export default connect(mapStateToprops)(Author);
