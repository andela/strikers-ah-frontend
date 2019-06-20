/* eslint-disable import/prefer-default-export */
import { ARTICLE_BY_CATEGORY } from '../actionTypes/articleType';
import axios from '../../helpers/axios';

export const articles = category => async dispatch => {
  try {
    const { data } = await axios.get(`/api/articles/category/${category}`);
    dispatch({
      type: ARTICLE_BY_CATEGORY,
      payload: data.article,
    });
  } catch (error) {
    dispatch({
      type: ARTICLE_BY_CATEGORY,
      payload: error.response.data,
    });
  }
};
