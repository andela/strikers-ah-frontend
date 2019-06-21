import {
  GET_READ_STATS_ARTILCES,
  GET_READ_STATS_ARTILCES_ERROR,
} from '../actionTypes/articleType';

const initialState = {};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_READ_STATS_ARTILCES:
      return {
        ...state,
        readingStats: payload,
      };
    case GET_READ_STATS_ARTILCES_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
