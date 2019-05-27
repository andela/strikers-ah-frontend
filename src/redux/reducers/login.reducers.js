/* eslint-disable import/prefer-default-export */
import { INVALID_CREDENTIALS, USER_LOGIN } from '../actionTypes/userTypes';

const initialState = {
  user: {},
  errors: {},
};

export const userLogin = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN:
      return {
        ...state,
        user: { ...state.user, ...payload },
      };
    case INVALID_CREDENTIALS:
      return {
        ...state,
        errors: payload,
      };
    default:
      return state;
  }
};
