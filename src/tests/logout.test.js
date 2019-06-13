import { shallow } from 'enzyme';
import React from 'react';
import '../enzymeConfig';
import Logout from '../components/logout';

describe('TEST LOGOUT COMPONENT', () => {
  test('it should logout user', () => {
    const wrapper = shallow(<Logout />);
    expect(wrapper).toMatchSnapshot();
  });
});
