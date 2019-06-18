/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import '../enzymeConfig';
import SlideShow from '../components/common/slideshow';
import { getConnectedComponent } from './profile/test-helpers';

const props = {
  main: jest.fn(),
  user: ['ui'],
  PageReducer: [
    {
      id: 1,
      title: 'lorem ipsum reif kiol',
      slug: 'hello-world-123aw',
      image: 'ioi.com',
      user: {
        username: 'john',
      },
      description: 'lorem ipsum guifhr',
      createdAt: '2019-06-06 21:14:23.938+02',
    },
    {
      id: 2,
      title: 'yuvan rev',
      slug: 'community-234-ww',
      image: 'jgii.com',
      user: {
        username: 'john',
      },
      description: 'lorem ipsum guifhr',
      createdAt: '2019-06-06 21:14:23.938+02',
    },
    {
      id: 3,
      title: 'camats jsjj',
      slug: 'hello-ui-ggd',
      image: 'jki.com',
      user: {
        username: 'john',
      },
      description: 'lorem ipsum guifhr',
      createdAt: '2019-06-06 21:14:23.938+02',
    },
    {
      id: 4,
      title: 'jkiid nd  reif kiol',
      slug: 'hfjjjf jfjjf',
      image: 'hgui.com',
      user: {
        username: 'john',
      },
      description: 'lorem ipsum guifhr',
      createdAt: '2019-06-06 21:14:23.938+02',
    },
    {
      id: 5,
      title: 'kngm jjd',
      slug: 'ui-integrate-ui122',
      image: 'jfiif.cm',
      user: {
        username: 'john',
      },
      description: 'lorem ipsum guifhr',
      createdAt: '2019-06-06 21:14:23.938+02',
    },
  ],
};

describe('<SlideShow/>', () => {
  it('Should render slideshow without crashing', () => {
    const wrapper = getConnectedComponent(SlideShow, {}, props);
    expect(wrapper).toMatchSnapshot();
  });
});
