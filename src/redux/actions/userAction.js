import jwt from 'jwt-decode';
import { GET_USER_PROFILE } from '../actionTypes/userTypes';

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

export const editLoggedInUserProfile = () => {
  return () => {};
};
