import {
  EDIT_USER_PROFILE,
  GET_USER_PROFILE,
  USER_PROFILE_NOT_FOUND,
} from '../actionTypes/userTypes';

const initialState = {
  user: {},
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_PROFILE:
      return {
        ...state,
        user: payload,
      };
    case EDIT_USER_PROFILE:
      return {
        ...state,
        user: { ...state.user.profile, ...payload },
      };
    case USER_PROFILE_NOT_FOUND:
      return {
        ...state,
        error: { ...payload },
      };
    default:
      return state;
  }
};
