import jwt from 'jwt-decode';
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
  console.log(email);
  try {
    const { response } = await fetch(
      'https://strikers-ah-backend.herokuapp.com/api/auth/forgetpassword',
      {
        method: 'post',
        body: JSON.stringify(email),
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      },
    );
    console.log(response);
    dispatch({
      type: FORGOT_PASSWORD,
      payload: response,
    });
  } catch (error) {
    console.log(error);
  }
};

export const editLoggedInUserProfile = () => {
  return () => {};
};
