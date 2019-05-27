/* eslint-disable import/prefer-default-export */
import { GET_SOCIAL_USER } from '../actionTypes/userTypes';

const initialState = [];
export const socialLoginUser = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SOCIAL_USER:
      return {
        ...state,
        LoggedInUser: payload,
      };
    default:
      return state;
  }
};
