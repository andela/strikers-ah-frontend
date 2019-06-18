import { SEARCH_RESULTS, NO_SEARCH_RESULT } from '../actionTypes/searchTypes';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_RESULTS:
      return {
        ...state,
        result: payload,
      };
    case NO_SEARCH_RESULT:
      return {
        ...state,
        searchError: payload,
      };

    default:
      return state;
  }
};
