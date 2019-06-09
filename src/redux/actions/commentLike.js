import axios from '../../helpers/axios';
import store from '../store';
import * as likeActionType from '../actionTypes/commentLike';
import { getComments } from './commentAction';

const likeComment = (slug, id) => async dispatch => {
  try {
    const res = await axios.post(`/api/articles/${slug}/comments/${id}/like`);
    dispatch({
      type: likeActionType.LIKE_COMMENT_SUCCESS,
      payload: res.data,
    });
    store.dispatch(getComments(slug));
  } catch (error) {
    dispatch({
      type: likeActionType.LIKE_COMMENT_FAIL,
      payload: error.response,
    });
  }
};

export default likeComment;
