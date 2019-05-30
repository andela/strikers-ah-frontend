import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import '../../../enzymeConfig';
import FollowButton from '../../../components/common/FollowButton';

const mockStore = configureStore();
const initialState = [
  {
    status: 'follow',
  },
];
const props = {
  following: {
    0: {
      status: 'following',
    },
  },
  handleClick: jest.fn(),
};
let store, wrapper;

beforeEach(() => {
  store = mockStore(initialState);
  wrapper = shallow(<FollowButton store={store} {...props} />);
});
describe('`FollowButton.jsx`', () => {
  test('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
