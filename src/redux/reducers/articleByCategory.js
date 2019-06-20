import { ARTICLE_BY_CATEGORY } from '../actionTypes/articleType';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ARTICLE_BY_CATEGORY:
      return {
        ...state,
        Articles: payload,
      };
    default:
      return state;
  }
};
