import axios from '../../helpers/axios';

import {
  GET_CATEGOTY_SUCCESS,
  GET_CATEGOTY_FAIL,
} from '../actionTypes/articleCategory';

const getArticleCategory = () => async dispatch => {
  try {
    const res = await axios.get('/api/category');
    dispatch({
      type: GET_CATEGOTY_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_CATEGOTY_FAIL,
      payload: { message: error.response.data },
    });
  }
};

export default getArticleCategory;
