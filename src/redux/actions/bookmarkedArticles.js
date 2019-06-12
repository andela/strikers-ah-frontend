import {
  GET_BOOKMARKED_ARTILCES,
  GET_BOOKMARKED_ARTICLES_ERROR,
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
export default getBookmarkedArticles;
