import { VALUE_CHANGE } from '../actionTypes/login';

const intialState = { email: '', password: '' };
export default (state = intialState, { type, payload }) => {
  switch (type) {
    case VALUE_CHANGE:
      return {
        ...state,
        ...payload,
      };
    default:
      return {
        ...state,
      };
  }
};
