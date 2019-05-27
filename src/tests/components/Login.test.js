/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import '../../enzymeConfig';
import { Login } from '../../components/Login';
import SocialButtons from '../../components/SocialButtons';

describe('`login.jsx`', () => {
  beforeAll(() => {
    Object.defineProperty(window.location, 'reload', {
      configurable: true,
    });
    window.location.reload = jest.fn();
  });

  test('should render', () => {
    const props = {
      values: {
        email: '',
        password: '',
      },
      login: {
        errors: {},
        user: {
          user: {},
        },
      },
    };
    const wrapper = shallow(<Login {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render', () => {
    const wrapper = shallow(<SocialButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
