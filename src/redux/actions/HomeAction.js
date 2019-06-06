import {
  FETCH_HOME_ARTICLES,
  FETCH_LATEST_ARTICLES,
  FETCH_FEATURED_ARTICLES,
} from '../actionTypes/homeTypes';
import axios from '../../helpers/axios';

export const main = () => async dispatch => {
  try {
    const { data } = await axios.get('/articles/all');

    const { article } = data;
    dispatch({
      type: FETCH_HOME_ARTICLES,
      payload: article,
    });
  } catch (error) {
    return error;
  }
};

export const featured = () => {
  return {
    type: FETCH_FEATURED_ARTICLES,
  };
};

export const latest = () => {
  return {
    type: FETCH_LATEST_ARTICLES,
  };
};
