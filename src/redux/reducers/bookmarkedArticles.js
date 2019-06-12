import {
  GET_BOOKMARKED_ARTILCES,
  GET_BOOKMARKED_ARTICLES_ERROR,
} from '../actionTypes/articleType';

const initialState = {};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BOOKMARKED_ARTILCES:
      return {
        ...state,
        ...payload,
      };
    case GET_BOOKMARKED_ARTICLES_ERROR:
      return {
        ...payload.state,
        error: payload,
      };
    default:
      return state;
  }
};
