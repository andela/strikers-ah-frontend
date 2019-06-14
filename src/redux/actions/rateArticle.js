import { RATE_ARTICLE, ARTICLE_RATINGS } from '../actionTypes/articleType';
import axios from '../../helpers/axios';

export const ratingArticle = (rate, slug) => async dispatch => {
  try {
    const response = await axios.post(`/api/articles/${slug}/rate/${rate}`);
    const payload = response.data;
    dispatch({
      type: RATE_ARTICLE,
      payload,
    });
  } catch (error) {
    dispatch({
      type: RATE_ARTICLE,
      payload: error.response.data,
    });
  }
};

export const checkRatings = slug => async dispatch => {
  try {
    const response = await axios.get(`/api/articles/${slug}/ratings`);
    const payload = response.data.averageRating;
    dispatch({
      type: ARTICLE_RATINGS,
      payload,
    });
  } catch (error) {
    dispatch({
      type: ARTICLE_RATINGS,
      payload: null,
    });
  }
};
