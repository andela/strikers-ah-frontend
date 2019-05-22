/* eslint-disable import/prefer-default-export */
import { GET_USER_PROFILE, FORGOT_PASSWORD } from '../actionTypes/userTypes';

const initialState = [];

export const userProfile = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_PROFILE:
      return {
        ...state,
        user: payload,
      };
    case FORGOT_PASSWORD:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};
