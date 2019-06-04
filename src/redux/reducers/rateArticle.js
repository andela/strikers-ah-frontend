/* eslint-disable import/prefer-default-export */
import { RATE_ARTICLE, ARTICLE_RATINGS } from '../actionTypes/articleType';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RATE_ARTICLE:
      return {
        ...state,
        rate: payload,
      };
    case ARTICLE_RATINGS:
      return {
        ...state,
        ratings: payload,
      };
    default:
      return state;
  }
};
