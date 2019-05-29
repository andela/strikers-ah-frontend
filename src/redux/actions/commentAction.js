import axios from 'axios';
import { ADD_COMMENT } from '../actionTypes/commentTypes';
import { getToken } from '../../helpers/authentication';
import { apiUrl } from '../../services/requestUrls';

export const addComment = (comment, slug) => {
  return async dispatch => {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('x-access0toke', `${getToken()}`);
    headers.append('x-auth-token', `${getToken()}`);

    const { data } = await axios.post(`${apiUrl}/articles/${slug}/comment`, {
      headers,
      body: comment,
    });

    dispatch({
      type: ADD_COMMENT,
      payload: data,
    });
  };
};
export const getComments = () => {};
