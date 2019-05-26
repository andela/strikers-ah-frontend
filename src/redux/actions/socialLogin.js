import jwt from 'jwt-decode';
import { GET_SOCIAL_USER } from '../actionTypes/userTypes';

const getSocialUser = token => {
  const user = jwt(token);
  const payload = {
    username: user.username,
    email: user.email,
  };
  return {
    type: GET_SOCIAL_USER,
    payload,
  };
};

export default getSocialUser;
