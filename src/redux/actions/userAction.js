import jwt from 'jwt-decode';
import axios from 'axios';
import { GET_USER_PROFILE, FORGOT_PASSWORD } from '../actionTypes/userTypes';

export const getLoggedInUserProfile = token => {
  const user = jwt(token);
  const payload = {
    username: user.username,
    email: user.email,
  };
  return {
    type: GET_USER_PROFILE,
    payload,
  };
};

export const forgotPassword = email => async dispatch => {
  try {
    const { data } = await axios.post(
      'https://strikers-ah-backend.herokuapp.com/api/auth/forgetpassword',
      { email },
    );
    dispatch({
      type: FORGOT_PASSWORD,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD,
      payload: error.response.data,
    });
  }
};

export const editLoggedInUserProfile = () => {
  return () => {};
};
