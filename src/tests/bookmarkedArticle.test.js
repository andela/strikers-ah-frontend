import '../enzymeConfig';
import BookmarkedArticles from '../components/article/bookmarkedArticles';
import { getConnectedComponent } from './profile/test-helpers';

describe('TEST READ ARTICLE WITH COMMENTS', () => {
  let wrapper;
  let instance;
  let props;
  beforeEach(() => {
    props = {
      bookmarkedArticles: {
        bookmarkedArticles: [{ id: 1, article: { id: 1, slug: 'this' } }],
      },
    };
    wrapper = getConnectedComponent(BookmarkedArticles, {}, props);
    wrapper.setProps(props);
    instance = wrapper.instance();
    instance.hasBookmarkedArticles(props.bookmarkedArticles);
  });
  test('it should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
