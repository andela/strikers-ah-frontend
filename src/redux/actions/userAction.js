import axios from '../../helpers/axios';
import {
  EDIT_USER_PROFILE,
  GET_USER_PROFILE,
  USER_PROFILE_NOT_FOUND,
  EDIT_PROFILE_ERROR,
} from '../actionTypes/userTypes';
import {
  GET_USER_ARTICLES,
  GET_USER_ARTICLES_ERROR,
} from '../actionTypes/articleType';

export const getUserProfile = username => async dispatch => {
  try {
    const { data } = await axios.get(`/api/profiles/${username}`);
    dispatch({
      type: GET_USER_PROFILE,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: USER_PROFILE_NOT_FOUND,
      payload: err,
    });
  }
};
export const editLoggedInUserProfile = user => async dispatch => {
  try {
    const { data } = await axios.put(`/api/profiles/${user.username}`, user);
    dispatch({
      type: EDIT_USER_PROFILE,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: EDIT_PROFILE_ERROR,
      payload: err,
    });
  }
};

export const getUserArticles = username => async dispatch => {
  try {
    const { data } = await axios.get(`/api/articles/user-articles/${username}`);
    dispatch({
      type: GET_USER_ARTICLES,
      payload: data.articles,
    });
  } catch (err) {
    dispatch({
      type: GET_USER_ARTICLES_ERROR,
      payload: err,
    });
  }
};
