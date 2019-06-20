/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-filename-extension */
import axios from '../../helpers/axios';
import { BOOKMARK, BOOKMARK_ERROR } from '../actionTypes/articleType';

const bookmark = slug => async dispatch => {
  try {
    const { data } = await axios.post(`/api/articles/${slug}/bookmark`);
    dispatch({
      type: BOOKMARK,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BOOKMARK_ERROR,
      payload: error.response.data,
    });
  }
};

export default bookmark;
