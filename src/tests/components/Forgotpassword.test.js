/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import '../../enzymeConfig';
import { ForgotPassword } from '../../components/ForgotPassword';

const props = {
  handleSubmit: jest.fn(),
  forgotPassword: jest.fn(),
  handleChange: jest.fn(),
  forgetPasswordState: jest.fn(),
  mapStateToProps: jest.fn(),
};
const wrapper = shallow(<ForgotPassword {...props} />);
describe('`ForgotPassword.jsx`', () => {
  test('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should `click the button`', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleSubmit');
    wrapper.instance().forceUpdate();
    const fakeEvent = { preventDefault: () => {} };

    const IsForm = wrapper.find('#forgotPasswordForm');
    IsForm.simulate('submit', fakeEvent);
    expect(IsForm.length).toBe(1);
    expect(spy).toHaveBeenCalled();
  });

  test('should `click the button`', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleChange');
    wrapper.instance().forceUpdate();
    const fakeEmail = {
      target: { value: 'email@f.com' },
    };

    const IsForm = wrapper.find('InputForm');
    IsForm.simulate('change', fakeEmail);
    expect(IsForm.length).toBe(1);
    expect(spy).toHaveBeenCalled();
  });
});
