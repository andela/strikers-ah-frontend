import search from '../redux/reducers/searchReducer';
import {
  SEARCH_RESULTS,
  NO_SEARCH_RESULT,
} from '../redux/actionTypes/searchTypes';

describe('action tests', () => {
  test('should dispatch get user action', async () => {
    search({}, { type: SEARCH_RESULTS, payload: {} });
  });
  test('should dispatch get user action', async () => {
    search({}, { type: NO_SEARCH_RESULT, payload: {} });
  });
});
