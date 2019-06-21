import '../enzymeConfig';
import ReadingStatsArticles from '../components/article/readingStatsArticles';
import { getConnectedComponent } from './profile/test-helpers';

describe('TEST READ ARTICLE STATS', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      statsArticles: {
        statsArticles: [{ id: 1, article: { id: 1, slug: 'this' } }],
      },
      thisWeekRead: 100,
      thisMonthRead: 100,
    };
    wrapper = getConnectedComponent(ReadingStatsArticles, {}, props);
    wrapper.setProps(props);
  });
  test('it should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
