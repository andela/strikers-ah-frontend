import '../../../enzymeConfig';
import { ARTICLE_BY_CATEGORY } from '../../../redux/actionTypes/articleType';
import articleByCategory from '../../../redux/reducers/articleByCategory';

const initialState = [];

const action = {
  type: ARTICLE_BY_CATEGORY,
  Articles: [34, 34, 43],
};
describe('Reducer `articleByCategory.js`', () => {
  test('should update the store', () => {
    const response = articleByCategory(initialState, action);
    expect(response.response).toBe(action.status);
  });
});
