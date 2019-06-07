import React from 'react';
import { shallow } from 'enzyme';
import '../../enzymeConfig';

import SocialMedia from '../../components/article/SocialMedia';
// import PrivateRoute from '../../PrivateRoute';

const wrapper = shallow(<SocialMedia />);
describe('test for social media sharing tests', () => {
  test('should render the `SocialMedia` component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  // test('test the local storage for `privateroute`', () => {
  //   const Wrapper = shallow(<PrivateRoute />);
  //   const localStorageMock = {
  //     getItem: jest.fn(),
  //     setItem: jest.fn(),
  //     clear: jest.fn(),
  //   };
  //   localStorageMock.setItem(
  //     'token',
  //     'fafjasfnlkajcoi9rq87450r0ufjc0asd8tfijfashfknuq47y8hfajhk',
  //   );
  //   Storage.prototype.getItem = jest.fn(() => 'token');
  //   // const token = localStorage.getItem('token');
  //   // global.localStorage = localStorageMock;
  //   // expect(localStorage.getItem.mock.calls.length).toBe(1);
  //   // jest.spyOn(localStorageMock, 'setItem');
  //   // global.localStorage.setItem = jest.fn();

  //   // // assertions as usual:
  //   // expect(localStorage.getItem).toHaveBeenCalledWith('token');

  //   expect(Wrapper).toMatchSnapshot();
  // });
});
