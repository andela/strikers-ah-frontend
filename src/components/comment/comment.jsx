import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Moment from 'react-moment';
import 'moment-timezone';
import {
  faTrash,
  faPencilAlt,
  faTimes,
  faHistory,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import EditHistory from './editHistory';

import { getLoggedInUser } from '../../helpers/authentication';
import CommentForm from './commentForm';
import '../../styles/css/comment.css';

/**
 * @author Mwibutsa Floribert
 * @param {Integer} id  --
 * @returns { * } --
 */
class Comment extends Component {
  /**
   * @author Mwibutsa Floribert
   * @param { object } object --
   * @param { string } role --
   * @returns { object } --
   */
  assignRole = (object, role) => (object.role ? object : { ...object, role });

  /**
   * @author Mwibutsa Floribert
   * @param { * } first --
   * @param {*} second --
   * @returns{ boolean } --
   */
  canEdit = (first, second) => first || second;

  /**
   * @author Mwibutsa Floribert
   * @returns { * } ---
   */
  render() {
    let user = getLoggedInUser();
    const {
      comment,
      deleteComment,
      slug,
      editComment,
      formId,
      toggleEditCommentForm,
      toggleEditHistory,
      editHistoryMode,
      commentHistoryId,
    } = this.props;
    const { author, comment: body, id, updatedAt, history } = comment;
    if (user) {
      user = this.assignRole(user, 'User');
    }
    const { editMode } = this.props;

    if (editMode && formId === id) {
      return (
        <div className="edit-form-container">
          <FontAwesomeIcon
            icon={faTimes}
            className="delete"
            onClick={() => toggleEditCommentForm(true)}
            test-data="closeButton"
          />
          {'   '}
          <span className="color-success">Editing</span>
          <CommentForm
            buttonLabel="save"
            slug={slug}
            currentValue={body}
            saveComment={(editedComment, articleSlug) => {
              toggleEditCommentForm(formId);
              return editComment(articleSlug, id, editedComment);
            }}
          />
        </div>
      );
    }
    return (
      <div className="comment-container">
        <div className="comment-author">
          <img src={author.image} alt="" />
        </div>

        <div className="comment-body">
          <Link className="author-name" to={`/profile/${author.username}`}>
            {author.username}
          </Link>
          <p className="comment-body">
            {body} <br />
            <Moment className="time-stamp" fromNow>
              {updatedAt}
            </Moment>
          </p>
          {user && (
            <div>
              {this.canEdit(
                user.username === author.username,
                user.role !== 'User',
              ) && (
                <FontAwesomeIcon
                  icon={faTrash}
                  className="delete"
                  onClick={() => deleteComment(slug, id)}
                  test-data="deleteButton"
                />
              )}
              {this.canEdit(
                user.username === author.username,
                user.role !== 'User',
              ) && (
                <FontAwesomeIcon
                  icon={faPencilAlt}
                  className="edit"
                  onClick={() => toggleEditCommentForm()}
                  test-data="editButton"
                />
              )}
              {history.length !== 0 && (
                <FontAwesomeIcon
                  icon={faHistory}
                  className="edit editHistory"
                  onClick={() => toggleEditHistory()}
                  test-data="editButton"
                />
              )}
            </div>
          )}
          <br />
          {editHistoryMode && history.length > 0 && commentHistoryId === id && (
            <div className="edit-history-section">
              <FontAwesomeIcon
                icon={faEyeSlash}
                className="delete hideButton"
                onClick={() => toggleEditHistory(true)}
                test-data="closeButton"
              />
              {history.length > 0 &&
                history
                  .reverse()
                  .slice(0, 5)
                  .map(oneHistory => {
                    return <EditHistory history={oneHistory} />;
                  })}
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Comment;
