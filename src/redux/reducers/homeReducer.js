/* eslint-disable import/prefer-default-export */
import {
  FETCH_HOME_ARTICLES,
  FETCH_FEATURED_ARTICLES,
  FETCH_LATEST_ARTICLES,
  FETCH_ARTICLES_REQUESTED,
  ARTICLE_ERROR,
} from '../actionTypes/homeTypes';

const initialState = {};

export const homePageReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_HOME_ARTICLES:
      return {
        ...state,
        main: payload,
      };
    case FETCH_FEATURED_ARTICLES:
      return {
        ...state,
        featured: payload,
      };
    case FETCH_LATEST_ARTICLES:
      return {
        ...state,
        latest: payload,
      };
    case FETCH_ARTICLES_REQUESTED:
      return {
        ...state,
        message: {
          status: 200,
          message: 'Waiting...',
        },
      };
    case ARTICLE_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
