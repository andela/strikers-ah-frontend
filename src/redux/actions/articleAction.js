import axios from '../../helpers/axios';
import {
  CREATE_ARTICLE,
  CREATE_ARTICLE_ERROR,
  GET_ARTICLES,
  GET_ARTICLES_ERRORS,
  GET_ONE_ARTICLE,
  // eslint-disable-next-line no-unused-vars
  DELETE_ARTICLE,
  DELETE_ARTICLE_ERROR,
  UPDATE_ARTICLE,
  UPDATE_ARTICLE_ERROR,
} from '../actionTypes/articleType';

export const createArticle = data => async dispatch => {
  try {
    const res = await axios.post('/api/articles/', data);
    dispatch({
      type: CREATE_ARTICLE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_ARTICLE_ERROR,
      payload: { message: error.response.data, status: error.response.status },
    });
  }
};

export const getAllArticles = () => async dispatch => {
  try {
    const res = await axios.get('/api/articles/all');
    dispatch({
      type: GET_ARTICLES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ARTICLES_ERRORS,
      payload: { message: error.response },
    });
  }
};

export const getOneArticle = slug => async dispatch => {
  try {
    const res = await axios.get(`/api/articles/${slug}`);
    dispatch({
      type: GET_ONE_ARTICLE,
      payload: res.data.article,
    });
  } catch (error) {
    dispatch({
      type: GET_ARTICLES_ERRORS,
      payload: { message: error.response },
    });
  }
};

export const deleteArticle = slug => async dispatch => {
  try {
    const res = await axios.delete(`/api/articles/${slug}`);
    dispatch({
      type: DELETE_ARTICLE,
      payload: {
        slug,
        message: res.data.message,
      },
    });
  } catch (error) {
    dispatch({
      type: DELETE_ARTICLE_ERROR,
      payload: { message: error.response.data.error },
    });
  }
};

export const updateArticle = (data, slug) => async dispatch => {
  try {
    const res = await axios.put(`/api/articles/${slug}`, data);
    dispatch({
      type: UPDATE_ARTICLE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_ARTICLE_ERROR,
      payload: { message: error.response.data },
    });
  }
};
