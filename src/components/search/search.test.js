import '../../enzymeConfig';
import { getConnectedComponent } from '../../tests/profile/test-helpers';
import Search from './index';

describe('TEST SEARCH PAGE', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      searchEngine: jest.fn(),
      location: { search: '?keyword=mwibutsa' },
      searchResult: {
        searchArticle: [{ slug: 'slug1243', body: 'body' }],
        searchAuthor: [{ username: 'username', firstname: 'firstname' }],
      },
    };
    wrapper = getConnectedComponent(Search, {}, props);
    wrapper.setProps(props);
  });
  test('it should render search page', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('it should render search page', () => {
    props.searchResult.searchArticle = [];
    props.searchResult.searchAuthor = [];
    wrapper.setProps(props);
    expect(wrapper).toMatchSnapshot();
  });
});
