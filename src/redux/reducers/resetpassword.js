/* eslint-disable import/prefer-default-export */
import { FORGOT_PASSWORD, RESET_PASSWORD } from '../actionTypes/userTypes';

const initialState = [];

export const forgotPassword = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FORGOT_PASSWORD:
      return {
        ...state,
        response: payload,
      };
    case RESET_PASSWORD:
      return {
        ...state,
        response: payload,
      };
    default:
      return state;
  }
};
