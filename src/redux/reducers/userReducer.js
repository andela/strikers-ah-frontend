// eslint-disable-next-line no-unused-vars
import { EDIT_USER_PROFILE, GET_USER_PROFILE } from '../actionTypes/userTypes';

const initialState = {
  user: {},
};
export default (state = initialState, action) => {
  switch (action) {
    default:
      return {
        ...state,
      };
  }
};
