/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { mount } from 'enzyme';
import '../../enzymeConfig';
import Login from '../../components/Login';
import SocialButtons from '../../components/SocialButtons';

describe('`login.jsx`', () => {
  test('should render', () => {
    const wrapper = mount(<Login />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render', () => {
    const wrapper = mount(<SocialButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
