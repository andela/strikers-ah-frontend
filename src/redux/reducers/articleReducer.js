import {
  CREATE_ARTICLE,
  CREATE_ARTICLE_ERROR,
  GET_ARTICLES,
  GET_ARTICLES_ERRORS,
  GET_ONE_ARTICLE,
  GET_ONE_ARTICLE_ERROR,
  DELETE_ARTICLE,
  DELETE_ARTICLE_ERROR,
  UPDATE_ARTICLE,
  UPDATE_ARTICLE_ERROR,
} from '../actionTypes/articleType';

const initialState = {
  allArticles: [],
};

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
    case GET_ARTICLES:
      return {
        ...state,
        allArticles: payload.article,
        loading: false,
      };
    case GET_ARTICLES_ERRORS:
      return {
        ...state,
        article: [],
        loading: true,
        success: false,
        message: payload,
      };
    case GET_ONE_ARTICLE:
      return {
        ...state,
        article: payload,
        loading: false,
      };
    case GET_ONE_ARTICLE_ERROR:
      return {
        ...state,
        article: [],
        message: payload,
      };
    case DELETE_ARTICLE:
      return {
        ...state,
        allArticles: [
          ...state.allArticles.filter(art => art.slug !== payload.slug),
        ],
        message: payload.message,
      };
    case DELETE_ARTICLE_ERROR:
      return {
        ...state,
        article: [],
        message: payload,
      };
    case UPDATE_ARTICLE:
      return {
        ...state,
        article: payload,
        loading: true,
      };
    case UPDATE_ARTICLE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
