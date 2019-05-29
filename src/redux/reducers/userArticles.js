import { GET_USER_ARTICLES } from '../actionTypes/articleType';

const initialState = {};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_ARTICLES:
      return {
        ...state,
        articles: payload,
      };
    default:
      return state;
  }
};
