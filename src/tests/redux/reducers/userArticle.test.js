import '../../../enzymeConfig';
import userArticles from '../../../redux/reducers/userArticles';
import { GET_USER_ARTICLES } from '../../../redux/actionTypes/articleType';

describe('Test user articles reducer', () => {
  it('it should be able to update state with new user articles', () => {
    const action = {
      type: GET_USER_ARTICLES,
      payload: { artilces: { id: 1, slug: 'any-article-slug-123' } },
    };
    const reducedState = userArticles({}, action);
    expect(reducedState.articles).toEqual(action.payload);
  });
});
