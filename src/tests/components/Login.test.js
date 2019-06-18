/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import '../../enzymeConfig';
import { Login } from '../../components/Login';

const props = {
  values: {
    email: 'example@email.com',
    password: 'Google13!',
  },
  login: {
    errors: {},
    user: {},
  },
  // handleChange: jest.fn(),
  valueChange: jest.fn(),
  loginAction: jest.fn(),
};
describe('`login.jsx`', () => {
  test('should render', () => {
    const wrapper = shallow(<Login {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should call handle change when user type-in the input field', () => {
    const wrapper = shallow(<Login {...props} />);
    wrapper
      .instance()
      .handleChange({ target: { name: 'email', value: 'example@email.com' } });
    expect(props.valueChange).toHaveBeenCalledTimes(1);
  });

  test('should call preventDefault when a form is submitted', () => {
    const wrapper = shallow(<Login {...props} />);
    wrapper
      .find('.signup_form_style')
      .at(0)
      .simulate('submit', { preventDefault: jest.fn() });
    expect(wrapper.state().submitted).toBeTruthy();
  });

  test('should redirect to the homepage when user is already logged in', () => {
    props.login.user.user = { email: 'john' };
    const wrapper = shallow(<Login {...props} />);
    expect(wrapper.debug()).toBe('');
  });

  test('should check if email is provided', () => {
    props.login.user = {};
    props.values.email = '';
    const wrapper = shallow(<Login {...props} />);
    wrapper
      .find('.signup_form_style')
      .at(0)
      .simulate('submit', { preventDefault: jest.fn() });
    expect(
      wrapper
        .find('.help-block')
        .at(0)
        .text(),
    ).toBe('Email is required');
  });

  test('should check if password is provided', () => {
    props.login.user = {};
    props.values.email = 'example@email.com';
    props.values.password = '';
    const wrapper = shallow(<Login {...props} />);
    wrapper
      .find('.signup_form_style')
      .at(0)
      .simulate('submit', { preventDefault: jest.fn() });
    expect(
      wrapper
        .find('.help-block')
        .at(0)
        .text(),
    ).toBe('Password is required');
  });

  test('should email and password are valid', () => {
    props.login.user = {};
    props.values.password = 'Google13!';
    props.login.errors = 'Invalid email or password';
    const wrapper = shallow(<Login {...props} />);
    wrapper
      .find('.signup_form_style')
      .at(0)
      .simulate('submit', { preventDefault: jest.fn() });
    expect(
      wrapper
        .find('.help-block')
        .at(0)
        .text(),
    ).toBe('Invalid email or password');
  });
});
