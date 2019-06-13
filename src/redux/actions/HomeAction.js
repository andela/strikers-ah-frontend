import {
  FETCH_HOME_ARTICLES,
  FETCH_LATEST_ARTICLES,
  FETCH_FEATURED_ARTICLES,
  FETCH_ARTICLES_REQUESTED,
  FETCH_USER_NOTIFICATIONS,
  ARTICLE_ERROR,
} from '../actionTypes/homeTypes';
import axios from '../../helpers/axios';

export const main = () => async dispatch => {
  try {
    const { data } = await axios.get('api/articles/all');

    const { article } = data;
    dispatch({
      type: FETCH_HOME_ARTICLES,
      payload: article,
    });
  } catch (error) {
    dispatch({
      type: ARTICLE_ERROR,
      payload: error.response.data,
    });
  }
};

export const featured = () => {
  return async function feature(dispatch) {
    dispatch({
      type: FETCH_ARTICLES_REQUESTED,
    });
    try {
      const { data } = await axios.get('api/articles/latest');
      dispatch({
        type: FETCH_FEATURED_ARTICLES,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ARTICLE_ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const latest = () => {
  return async function feature(dispatch) {
    dispatch({
      type: FETCH_ARTICLES_REQUESTED,
    });
    try {
      const { data } = await axios.get('api/articles/latest');
      dispatch({
        type: FETCH_LATEST_ARTICLES,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ARTICLE_ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const notification = () => async dispatch => {
  try {
    const { data } = await axios.get('api/profiles/notifications');

    const { notifications } = data;
    dispatch({
      type: FETCH_USER_NOTIFICATIONS,
      payload: notifications,
    });
  } catch (error) {
    dispatch({
      type: ARTICLE_ERROR,
      payload: error.response,
    });
  }
};
