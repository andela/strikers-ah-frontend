import { ADD_COMMENT, GET_COMMENTS } from '../actionTypes/commentTypes';

const initialState = {};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_COMMENT:
      return {
        ...state,
        ...payload,
      };
    case GET_COMMENTS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
