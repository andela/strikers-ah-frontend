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

export const getUserProfile = username => {
  return dispatch => {
    axios
      .get(`/api/profiles/${username}`)
      .then(res => {
        const { data } = res;
        delete data.profile.password;
        dispatch({
          type: GET_USER_PROFILE,
          payload: data,
        });
      })
      .catch(err => {
        dispatch({
          type: USER_PROFILE_NOT_FOUND,
          payload: err,
        });
      });
  };
};
export const editLoggedInUserProfile = user => {
  return dispatch => {
    axios
      .put(`/api/profiles/${user.username}`, user)
      .then(res => {
        dispatch({
          type: EDIT_USER_PROFILE,
          payload: { ...res.data },
        });
      })
      .catch(err => {
        dispatch({
          type: EDIT_PROFILE_ERROR,
          payload: err,
        });
      });
  };
};

export const getUserArticles = username => {
  return async dispatch => {
    const { data: user } = await axios.get(`/api/profiles/${username}`);
    if (user && user.profile) {
      axios
        .get(`/api/articles/all`)
        .then(res => {
          const { article: articles } = res.data;
          const userArticles = articles.filter(
            article => article.authorid === user.profile.id,
          );
          dispatch({
            type: GET_USER_ARTICLES,
            payload: userArticles,
          });
        })
        .catch(err => {
          dispatch({
            type: GET_USER_ARTICLES_ERROR,
            payload: err,
          });
        });
    }
  };
};
