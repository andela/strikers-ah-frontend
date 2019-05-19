/* eslint-disable import/prefer-default-export */
import { GET_USER_PROFILE } from '../actionTypes/userTypes';

const initialState = [];

export const userProfile = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_PROFILE:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};
