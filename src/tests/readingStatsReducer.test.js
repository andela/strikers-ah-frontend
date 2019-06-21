import '../enzymeConfig';
import readingStats from '../redux/reducers/readingStatsArticles';
import {
  GET_READ_STATS_ARTILCES,
  GET_READ_STATS_ARTILCES_ERROR,
} from '../redux/actionTypes/articleType';

describe('TEST READING STATS ARTICLES REDUCER', () => {
  test('should be able to update state on listing stats', () => {
    const expectedState = {
      articles: [],
    };
    const action = {
      type: GET_READ_STATS_ARTILCES,
      payload: expectedState,
    };

    const state = readingStats({}, action);
    expect(state).toEqual({ ...state, readingStats: expectedState });
  });
  test('should be able to update state on listing stats', () => {
    const expectedState = {
      error: 'mwbutsa',
    };
    const action = {
      type: GET_READ_STATS_ARTILCES_ERROR,
      payload: expectedState,
    };

    const state = readingStats({}, action);
    expect(state.error).toEqual(expectedState);
  });
});
