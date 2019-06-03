import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { getLoggedInUser } from '../../helpers/authentication';

import '../../styles/css/comment.css';

const Comment = props => {
  const user = getLoggedInUser();
  const { comment, deleteComment, editComment, slug } = props;
  const { author, comment: body, id } = comment;
  user.role = user.role ? user.role : 'User';
  return (
    <div className="comment-container">
      <div className="comment-author">
        <img src={author.image} alt="" />
      </div>

      <div className="comment-body">
        <span className="author-name">{author.username}</span>
        <p className="comment-body">{body}</p>
        {(user.username === author.username || user.role !== 'User') && (
          <FontAwesomeIcon
            icon={faTrash}
            className="delete"
            onClick={() => deleteComment(slug, id)}
          />
        )}
        {(user.username === author.username || user.role !== 'User') && (
          <FontAwesomeIcon
            icon={faPencilAlt}
            className="edit"
            onClick={() => editComment(slug, id)}
          />
        )}
        <br />
      </div>
    </div>
  );
};
export default Comment;
