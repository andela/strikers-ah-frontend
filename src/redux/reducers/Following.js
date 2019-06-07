/* eslint-disable import/prefer-default-export */
import { FOLLOW, UNFOLLOW, FOLLOW_STATUS } from '../actionTypes/userTypes';

const initialState = [
  {
    status: 'follow',
  },
];

export const following = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FOLLOW:
      return {
        ...state,
        0: {
          status: payload,
        },
      };
    case UNFOLLOW:
      return {
        ...state,
        0: {
          status: payload,
        },
      };
    case FOLLOW_STATUS:
      return {
        ...state,
        0: {
          status: payload,
        },
      };
    default:
      return state;
  }
};
