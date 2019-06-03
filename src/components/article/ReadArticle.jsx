/* eslint-disable react/destructuring-assignment */
import reactHtml from 'html-react-parser';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import '../../styles/css/article.css';
import { getOneArticle } from '../../redux/actions/articleAction';
import Author from './Author';
import SocialMedia from './SocialMedia';
import CommentForm from '../comment/commentForm';
import {
  addComment,
  getComments,
  deleteComment,
  editComment,
} from '../../redux/actions/commentAction';
import Comment from '../comment/comment';

/**
 *@author: Innocent Nkunzi
 * @returns {*} Articleform
 */
export class ReadArticle extends Component {
  /**
   * @author Innocent Nkunzi
   * @returns {*} componentDidmount
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
    if (nextProps.deletedComment) {
      console.log('deleted', nextProps.deletedComment);
    }
  }

  /**
   * @author Innocent Nkunzi
   * @returns {*} component
   */
  render() {
    const {
      addComment: saveComment,
      deleteComment: removeComment,
      editComment: modifyComment,
    } = this.props;
    const { slug } = this.props.match.params;
    const singleArticle = this.props.article.article;
    if (singleArticle !== null && singleArticle !== undefined) {
      let commentList = [];
      const { comments } = this.props;
      commentList = comments;
      return (
        <Fragment>
          <Header />
          <div className="container">
            <div className="contents">
              <div className="contentTitle">
                {/* {article.title && <p>{reactHtmlparser(article.title)}</p>} */}
                <h1>{reactHtml(singleArticle.title || '')}</h1>
                <Author />
                <SocialMedia />
              </div>
              <div className="contentBody">
                <p>{reactHtml(singleArticle.body || '')}</p>
                <p id="styleImage">
                  <img src={singleArticle.image} alt="Article" />
                </p>
              </div>
            </div>
            <CommentForm slug={slug} saveComment={saveComment} />
            <div className="comments-container">
              {comments && (
                <span className="comment-count">
                  {' '}
                  {commentList.length} Comments
                </span>
              )}
              {comments
                ? commentList.length > 0 &&
                  commentList.map(comment => {
                    return (
                      <Comment
                        comment={comment}
                        key={comment.id}
                        editComment={modifyComment}
                        deleteComment={removeComment}
                        slug={slug}
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
        <p>Single article</p>
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
