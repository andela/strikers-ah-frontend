import { USER_NOTIFICATION } from '../actionTypes/userTypes';

const initialState = {
  emails: {
    status: false,
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_NOTIFICATION:
      return {
        ...state,
        emails: payload,
      };
    default:
      return state;
  }
};
