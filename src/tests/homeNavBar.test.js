/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import '../enzymeConfig';
import { HomeNavBar } from '../components/homeNavBar';

const props = {
  user: 'uiii',
  notification: jest.fn(),
};
describe('<HomeNavBar/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<HomeNavBar {...props} />);
  });
  it('Should render navbar with user logged in', () => {
    const navBar = shallow(<HomeNavBar {...props} />);
    expect(navBar).toMatchSnapshot();
  });

  it('Should render navbar without user logged in', () => {
    const navBar = shallow(<HomeNavBar {...props} />);
    expect(navBar).toMatchSnapshot();
  });
  it('should openToggle', () => {
    const instance = wrapper.instance();
    instance.openToggle({ target: { name: 'notification' } });
    expect(instance.state.popup).toBe(true);
    instance.openToggle({ target: { name: 'profile' } });
    expect(instance.state.profile).toBe(true);
  });

  it('should be able to update notifications', () => {
    const instance = wrapper.instance();
    instance.componentWillReceiveProps({
      NotificationReducer: [{ message: 'message' }],
    });
    instance.componentWillReceiveProps({ NotificationReducer: false });
    instance.componentWillReceiveProps({ NotificationReducer: [] });
    expect(instance.state.notificationMsg).toBe('No notification yet');
  });
});
