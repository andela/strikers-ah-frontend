/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import '../../enzymeConfig';
import Settings from '../../components/Setting';

const props = {
  location: {
    search: 'example.com',
  },
  componentWillMount: jest.fn(),
  socialLoginUser: {
    user: 'example',
  },
  getSocialUser: jest.fn(),
  match: { params: { username: 'username' } },
};
let wrapper;
describe('`Settings.jsx`', () => {
  beforeEach(() => {
    wrapper = shallow(<Settings {...props} />);
  });
  test('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
