/* eslint-disable import/prefer-default-export */
import {
  FETCH_HOME_ARTICLES,
  FETCH_FEATURED_ARTICLES,
  FETCH_LATEST_ARTICLES,
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
        featured: {
          payload,
        },
      };
    case FETCH_LATEST_ARTICLES:
      return {
        ...state,
        latest: {
          payload,
        },
      };
    default:
      return state;
  }
};
