/* eslint-disable import/no-named-as-default */
/* eslint-disable react/destructuring-assignment */
import reactHtml from 'html-react-parser';
import uuid from 'uuid';
import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import '../../styles/css/article.css';
import '../../styles/css/highlight.css';
// import '../../helpers/highlight';
import twitterIcon from '../../styles/img/twitter-icon.png';
import facebookIcon from '../../styles/img/facebook-icon.png';
import copyIcon from '../../styles/img/copy-icon.png';
import commentIcon from '../../styles/img/commenting-icon.png';
import { getOneArticle } from '../../redux/actions/articleAction';
import Author from './Author';
import SocialMedia from './SocialMedia';
import CommentForm from '../comment/commentForm';
import Spinner from './Spinner';
import {
  addComment,
  getComments,
  deleteComment,
  editComment,
} from '../../redux/actions/commentAction';
import Comment from '../comment/comment';
import Rate from '../common/Rate';
import Ratings from '../common/Ratings';

/**
 *@author: Innocent Nkunzi
 @param { Integer } commentId --
 @param { Boolaen } cancel
 * @returns {*} Articleform
 */
export class ReadArticle extends Component {
  state = {
    commentEditMode: false,
    editCommentId: 0,
    editHistoryMode: false,
    commentHistoryId: 0,
  };

  /**
   * @author Innocent Nkunzi
   * @returns {*} componentWillmount
   */
  componentWillMount() {
    const { slug } = this.props.match.params;
    this.props.getOneArticle(slug);
    this.props.getComments(slug);
  }

  /**
   * @author Mwibutsa Floribert
   * @param {*} nextProps
   * @returns { * } --
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.comment) {
      this.props.comments.unshift(nextProps.comment);
    }
  }

  toggleEditCommentForm = (commentId, cancel) => {
    this.setState({
      commentEditMode: true && !cancel,
      editCommentId: commentId,
    });
  };

  /**
   * @param {* } commentId --
   * @param { * } cancel --
   * @returns { * } --
   */
  toggleEditHistory = (commentId, cancel) => {
    this.setState({
      editHistoryMode: true && !cancel,
      commentHistoryId: commentId,
    });
  };

  /**
   * @author Innocent Nkunzi
   * @returns {*} component
   */
  render() {
    const id = uuid.v4();
    const {
      addComment: saveComment,
      deleteComment: removeComment,
      editComment: modifyComment,
    } = this.props;
    const {
      commentEditMode,
      editCommentId,
      editHistoryMode,
      commentHistoryId,
    } = this.state;
    const { slug } = this.props.match.params;
    const singleArticle = this.props.article.article;
    const {
      article: { message },
    } = this.props;
    if (
      message !== undefined &&
      message === 'No article found with the slug provided'
    ) {
      return <Redirect to="/not-found" />;
    }
    if (singleArticle !== null && singleArticle !== undefined) {
      let commentList = [];
      const { comments } = this.props;
      commentList = comments;
      import('../../helpers/highlight');
      return (
        <Fragment>
          <Header />
          <div className="comment-box-content-container">
            <p className="comment-box-content-container-text" />
            <fieldset>
              <button type="button" className="contact-cancel cancelCommentBox">
                Exit
              </button>
              <button
                type="button"
                className="contact-cancel"
                id="deletecommentBtn"
              >
                Delete
              </button>
            </fieldset>
          </div>
          <div className="comment-box-container">
            <form id="comment-box">
              <fieldset>
                <textarea
                  id="comment"
                  placeholder="Type your comment here...."
                  required
                />
              </fieldset>
              <fieldset>
                <button
                  type="button"
                  className="contact-cancel hideCommentBoxBtn"
                >
                  Cancel
                </button>
                <button type="button" className="contact-submit addCommentBtn">
                  Submit
                </button>
              </fieldset>
            </form>
          </div>

          <div className="highlight">
            <span className="section twitter">
              <img
                src={twitterIcon}
                alt="Twitter Icon"
                width="512.002px"
                height="512.002px"
              />
            </span>
            <span className="section facebook">
              <img
                src={facebookIcon}
                alt="Facebook Icon"
                width="512.002px"
                height="512.002px"
              />
            </span>
            <span className="section copyclipboard">
              <img
                src={copyIcon}
                alt="Copy Icon"
                width="512.002px"
                height="512.002px"
              />
            </span>
            <span className="section comment">
              <img
                src={commentIcon}
                alt="Comment Icon"
                width="512.002px"
                height="512.002px"
              />
            </span>
          </div>
          <div className="container">
            <div className="contents">
              <div className="contentTitle">
                <h1>{singleArticle.title && reactHtml(singleArticle.title)}</h1>
                <Author />
                <SocialMedia />
                {singleArticle.taglist !== undefined &&
                singleArticle.taglist.length !== 0
                  ? singleArticle.taglist.map(tag => (
                      <div className="tagList" key={id}>
                        #{tag}
                      </div>
                    ))
                  : ''}
              </div>
              <div className="contentBody">
                {singleArticle.image !== 'null' &&
                singleArticle.image !== undefined ? (
                  <p id="styleImage">
                    <img src={singleArticle.image} alt="Article" />
                  </p>
                ) : (
                  ''
                )}
                <p id="articleBody" className="articleBody">
                  {singleArticle.body && reactHtml(singleArticle.body)}
                </p>
                <hr />
                <div className="rating">
                  <Rate slug={singleArticle.slug} />
                  <Ratings slug={singleArticle.slug} />
                </div>
              </div>
            </div>
            <CommentForm
              slug={slug}
              saveComment={saveComment}
              buttonLabel="Comment"
            />
            <div className="comments-container">
              {comments && (
                <span className="comment-count">
                  {commentList.length > 0 && (
                    <span test-data="count-comment">
                      {commentList.length > 1
                        ? `${commentList.length} Comments`
                        : `${commentList.length} Comment`}
                    </span>
                  )}
                </span>
              )}
              {comments && (
                <span>
                  {commentList.length === 0 && (
                    <span>Be the first to add a comment</span>
                  )}
                  <br />
                </span>
              )}
              {comments
                ? commentList.length > 0 &&
                  commentList.map(comment => {
                    return (
                      <Comment
                        formId={editCommentId}
                        comment={comment}
                        key={comment.id}
                        editComment={modifyComment}
                        deleteComment={removeComment}
                        slug={slug}
                        toggleEditCommentForm={(cancel = false) =>
                          this.toggleEditCommentForm(comment.id, cancel)
                        }
                        editMode={commentEditMode}
                        test-data="commentComponent"
                        editHistoryMode={editHistoryMode}
                        commentHistoryId={commentHistoryId}
                        toggleEditHistory={(cancel = false) =>
                          this.toggleEditHistory(comment.id, cancel)
                        }
                      />
                    );
                  })
                : ''}
            </div>
          </div>
        </Fragment>
      );
    }
    return (
      <div>
        <Spinner />
      </div>
    );
  }
}
const mapStateToprops = state => ({
  article: state.Article,
  comments: state.comments.comments,
  comment: state.comments.comment,
});

export default connect(
  mapStateToprops,
  { getOneArticle, addComment, getComments, deleteComment, editComment },
)(ReadArticle);
