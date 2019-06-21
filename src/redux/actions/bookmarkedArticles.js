import {
  GET_BOOKMARKED_ARTILCES,
  GET_BOOKMARKED_ARTICLES_ERROR,
  GET_READ_STATS_ARTILCES,
  GET_READ_STATS_ARTILCES_ERROR,
} from '../actionTypes/articleType';
import axios from '../../helpers/axios';

export const getBookmarkedArticles = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/articles/bookmarked');
    dispatch({
      type: GET_BOOKMARKED_ARTILCES,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_BOOKMARKED_ARTICLES_ERROR,
      payload: err.response,
    });
  }
};

export const getReadingStatsArticles = username => async dispatch => {
  // console.log(this.props);
  try {
    const { data } = await axios.get(`/api/users/${username}/stats`);
    dispatch({
      type: GET_READ_STATS_ARTILCES,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_READ_STATS_ARTILCES_ERROR,
      payload: err.response,
    });
  }
};
export default {
  getBookmarkedArticles,
  getReadingStatsArticles,
};
