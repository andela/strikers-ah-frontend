import '../enzymeConfig';
import ReportedArticles from '../components/reportedArticles';
import { getConnectedComponent } from './profile/test-helpers';

const props = {
  getReportedArticles: jest.fn(),
};

describe('<ReportedArticles/>', () => {
  it('should render without crashing...', () => {
    const wrapper = getConnectedComponent(ReportedArticles, {}, props);
    wrapper.setProps({
      reportedArticles: {
        report: [
          {
            id: 2,
            article: {
              slug: 'hello-world-2332y',
              title: 'hello-world',
              image: 'http://ui.me',
            },
            category: 'everything',
            description: 'here we are',
          },
        ],
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should show a default image when the image is null', () => {
    const wrapper = getConnectedComponent(ReportedArticles, {}, props);
    wrapper.setProps({
      reportedArticles: {
        report: [
          {
            id: 2,
            article: {
              slug: 'hello-world-2332y',
              title: 'hello-world',
              image: 'null',
            },
            category: 'everything',
            description: 'here we are',
          },
        ],
      },
    });
    expect(
      wrapper.find('.report-img').findWhere(item => {
        return item.prop('src') === 'traveling.jpg';
      }),
    ).toHaveLength(1);
  });
});
