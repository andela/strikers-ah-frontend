import {
  ADD_COMMENT,
  GET_COMMENTS,
  DELETE_COMMENT,
} from '../actionTypes/commentTypes';

const initialState = {};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_COMMENT:
      return { ...state, comment: payload };
    case GET_COMMENTS:
      return { ...state, comments: payload };
    case DELETE_COMMENT:
      return {
        ...state,
        deleteMessage: payload,
      };
    default:
      return state;
  }
};
