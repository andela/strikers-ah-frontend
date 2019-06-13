import axios from '../../helpers/axios';
import {
  CREATE_ARTICLE,
  CREATE_ARTICLE_ERROR,
  GET_ARTICLES,
  GET_ARTICLES_ERRORS,
  GET_ONE_ARTICLE,
  GET_ONE_ARTICLE_ERROR,
  DELETE_ARTICLE,
  DELETE_ARTICLE_ERROR,
  UPDATE_ARTICLE,
  UPDATE_ARTICLE_ERROR,
} from '../actionTypes/articleType';

export const createArticle = data => async dispatch => {
  const formData = new FormData();
  const { taglist = [], image, title, body } = data;
  formData.append('image', image);
  formData.append('title', title);
  formData.append('body', body);
  taglist.forEach(tag => {
    formData.append('taglist[]', tag);
  });

  try {
    const res = await axios.post('/api/articles', formData);
    dispatch({
      type: CREATE_ARTICLE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_ARTICLE_ERROR,
      payload: {
        message: error.response.data,
        status: error.response.status,
      },
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
    if (error.response) {
      dispatch({
        type: GET_ARTICLES_ERRORS,
        payload: { message: error.response.data },
      });
    }
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
    if (error.response) {
      dispatch({
        type: GET_ONE_ARTICLE_ERROR,
        payload: { message: error.response.data },
      });
    }
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
  const formData = new FormData();
  const { taglist = [], image, title, body } = data;
  formData.append('image', image);
  formData.append('title', title);
  formData.append('body', body);
  if (taglist.length !== 0) {
    taglist.forEach(tag => {
      formData.append('taglist[]', tag);
    });
  } else {
    formData.append('taglist', []);
  }
  try {
    const res = await axios.put(`/api/articles/${slug}`, formData);
    dispatch({
      type: UPDATE_ARTICLE,
      payload: res.data,
    });
  } catch (error) {
    if (error.response) {
      dispatch({
        type: UPDATE_ARTICLE_ERROR,
        payload: error.response.data,
      });
    }
  }
};
