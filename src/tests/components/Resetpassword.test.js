/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import '../../enzymeConfig';
import { ResetPassword } from '../../components/ResetPassword';

const mockStore = configureStore();
const initialState = [{}];
let props, store, wrapper;
props = {
  handleSubmit: jest.fn(),
  resetPassword: jest.fn(),
  handleChange: jest.fn(),
  forgetPasswordState: jest.fn(),
  mapStateToProps: jest.fn(),
  location: {
    search: 'something',
  },
};
describe('`resetpassword.jsx`', () => {
  beforeEach(() => {
    store = mockStore(initialState);
  });
  wrapper = shallow(<ResetPassword store={store} {...props} />);
  test('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should `click the button`', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleSubmit');
    wrapper.instance().forceUpdate();
    const fakeEvent = { preventDefault: () => {} };

    const IsForm = wrapper.find('#resetPasswordForm');
    IsForm.simulate('submit', fakeEvent);
    expect(IsForm.length).toBe(1);
    expect(spy).toHaveBeenCalled();
  });
  props = {
    handleSubmit: jest.fn(),
    resetPassword: jest.fn(),
    handleChange: jest.fn(),
    mapStateToProps: jest.fn(),
    forgetPasswordState: {
      response: {
        message: 'something',
      },
    },
    location: {
      search: 'something',
    },
  };
  wrapper = shallow(<ResetPassword store={store} {...props} />);
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
