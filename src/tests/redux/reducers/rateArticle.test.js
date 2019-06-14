import '../../../enzymeConfig';
import {
  RATE_ARTICLE,
  ARTICLE_RATINGS,
} from '../../../redux/actionTypes/articleType';
import rateArticle from '../../../redux/reducers/rateArticle';

const initialState = [];

const action = {
  type: RATE_ARTICLE,
  rate: '',
};
const action2 = {
  type: ARTICLE_RATINGS,
  rate: '',
};
describe('Reducer rateArticle.js', () => {
  test('should update the store', () => {
    const response = rateArticle(initialState, action);
    expect(response.response).toBe(action.status);
  });
  test('should update the store', () => {
    const response = rateArticle(initialState, action2);
    expect(response.response).toBe(action2.status);
  });
});
