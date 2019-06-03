import axios from '../../helpers/axios';
import store from '../store';
import {
  ADD_COMMENT,
  GET_COMMENTS,
  GET_COMMENTS_ERROR,
  ADD_COMMENT_ERROR,
  DELETE_COMMENT,
  DELETE_COMMENT_ERROR,
  EDIT_COMMENT,
  EDIT_COMMENT_ERROR,
} from '../actionTypes/commentTypes';
// import { getUserToken, getLoggedInUser } from '../../helpers/authentication';

export const getComments = slug => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/articles/${slug}/comments`);
      dispatch({
        type: GET_COMMENTS,
        payload: data.comment,
      });
    } catch (err) {
      dispatch({
        type: GET_COMMENTS_ERROR,
        payload: err,
      });
    }
  };
};
export const addComment = (comment, slug) => {
  return async dispatch => {
    try {
      const { data } = await axios.post(`/api/articles/${slug}/comments`, {
        comment: { body: comment },
      });
      dispatch({
        type: ADD_COMMENT,
        payload: data.comment,
      });
    } catch (err) {
      dispatch({
        type: ADD_COMMENT_ERROR,
        payload: err,
      });
    }
  };
};

export const deleteComment = (slug, id) => {
  return async dispatch => {
    try {
      const { data } = await axios.delete(
        `/api/articles/${slug}/comments/${id}`,
      );
      dispatch({
        type: DELETE_COMMENT,
        payload: data,
      });
      store.dispatch(getComments(slug));
    } catch (err) {
      dispatch({
        type: DELETE_COMMENT_ERROR,
        payload: err,
      });
    }
  };
};

export const editComment = (articleSLug, commentId, comment) => {
  return async dispatch => {
    try {
      const { data } = await axios.put(
        `/api/articles/${articleSLug}/comments/${commentId}`,
        {
          comment: { body: comment },
        },
      );
      dispatch({
        type: EDIT_COMMENT,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: EDIT_COMMENT_ERROR,
        payload: err,
      });
    }
  };
};
