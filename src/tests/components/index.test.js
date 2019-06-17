/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import '../../enzymeConfig';
// eslint-disable-next-line import/no-named-as-default
import Index from '../../components/Index';

const mockStore = configureStore();
const initialState = [{}];
const props = {
  location: {
    search: 'example.com',
  },
  componentWillMount: jest.fn(),
  socialLoginUser: {
    user: 'example',
  },
  getSocialUser: jest.fn(),
};
let store, wrapper;
describe('`Index.jsx`', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<Index store={store} {...props} />);
  });
  test('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
  //   test('should call the componentWillMount', () => {
  //       expect(props.getSocialUser).toHaveBeenCalled();
  //   })
});
