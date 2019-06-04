import '../enzymeConfig';
import bookmark from '../redux/reducers/bookmarkedArticles';
import {
  GET_BOOKMARKED_ARTILCES,
  GET_BOOKMARKED_ARTICLES_ERROR,
} from '../redux/actionTypes/articleType';

describe('TEST BOOKMARKED ARTICLES REDUCER', () => {
  test('should be able to update state on get bookmarked articles', () => {
    const expectedState = {
      user: 'mwbutsa',
    };
    const action = {
      type: GET_BOOKMARKED_ARTILCES,
      payload: expectedState,
    };

    const state = bookmark({}, action);
    expect(state).toEqual(expectedState);
  });
  test('should be able to update state on get bookmarked articles error', () => {
    const expectedState = {
      error: 'mwbutsa',
    };
    const action = {
      type: GET_BOOKMARKED_ARTICLES_ERROR,
      payload: expectedState,
    };

    const state = bookmark({}, action);
    expect(state.error).toEqual(expectedState);
  });
});
