/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import '../enzymeConfig';
import HomeBody from '../components/homeBody';
import { getConnectedComponent } from './profile/test-helpers';

const props = {
  main: jest.fn(),
  latest: jest.fn(),
  featured: jest.fn(),
  homePageReducer: [
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
  ],
  latestReducer: {
    data: [
      {
        id: 1,
        title: 'lorem ipsum reif kiol',
        slug: 'hello-world-123aw',
        image: 'null',
        user: {
          username: 'john',
        },
        description: 'lorem ipsum guifhr',
        createdAt: '2019-06-06 21:14:23.938+02',
      },
    ],
  },
  featuredReducer: {
    data: [
      {
        id: 1,
        title: 'lorem ipsum reif kiol',
        slug: 'hello-world-123aw',
        user: {
          username: 'john',
        },
        description: 'lorem ipsum guifhr',
        createdAt: '2019-06-06 21:14:23.938+02',
      },
    ],
  },
};
describe('Test Homebody Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = getConnectedComponent(HomeBody, {}, props);
  });
  it('Should render HomeBody without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should receive render data from redux on our page', async () => {
    wrapper.setProps(props);
    wrapper.instance().componentDidMount();
    expect(props.main).toHaveBeenCalledTimes(1);
  });
});
