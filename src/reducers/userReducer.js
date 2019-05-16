import { EDIT_USER_PROFILE, GET_USER_PROFILE } from '../actions/types';

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
