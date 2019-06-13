import * as likeActionType from '../actionTypes/commentLike';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case likeActionType.LIKE_COMMENT_SUCCESS:
      return {
        ...state,
        like: payload,
      };
    case likeActionType.LIKE_COMMENT_FAIL:
      return {
        ...state,
        message: payload,
      };
    default:
      return state;
  }
};
