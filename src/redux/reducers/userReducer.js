import { EDIT_USER_PROFILE, GET_USER_PROFILE } from '../actionTypes/userTypes';

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
    default:
      return state;
  }
};
