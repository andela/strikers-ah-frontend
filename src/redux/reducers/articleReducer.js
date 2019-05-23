import {
  CREATE_ARTICLE,
  CREATE_ARTICLE_ERROR,
} from '../actionTypes/articleType';
import initialState from './ArticleInitialState';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_ARTICLE:
      return {
        ...state,
        article: payload,
        loading: true,
      };
    case CREATE_ARTICLE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
