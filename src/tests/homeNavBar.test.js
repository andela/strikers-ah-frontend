/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import '../enzymeConfig';
import { HomeNavBar } from '../components/homeNavBar';
import { getLoggedInUser } from '../helpers/authentication';

const props = {
  notification: jest.fn(),
  nextProps: { NotificationReducer: [] },
};

jest.mock('../helpers/authentication');
let wrapper;
describe('<HomeNavBar/>', () => {
  beforeEach(() => {
    wrapper = shallow(<HomeNavBar {...props} />);
  });

  getLoggedInUser.mockImplementation(() => ({
    username: 'john',
    role: 'Admin',
  }));
  it('Should render navbar with user logged in', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Should reload the page when user is logged in with social network', () => {
    delete window.location;
    window.location = { search: '?token=hfhhfhhfhhfhhh' };
    window.location.replace = jest.fn();
    localStorage.setItem('token', 'hfhhfhhfhhfhhh');
    wrapper.instance().componentWillMount();
    expect(window.location.replace).toHaveBeenCalled();
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
    expect(instance.state.notificationMsg).toEqual(
      <div className="when-no-notification">No notification yet</div>,
    );
  });

  it('Should test componentWillReceiveProps if set a notification state', () => {
    wrapper.instance().componentWillReceiveProps(props.nextProps);
    expect(wrapper.state().notificationMsg).toEqual(
      <div className="when-no-notification">No notification yet</div>,
    );
  });

  it('Should store notifications through componentWillReceiveProps', () => {
    props.nextProps.NotificationReducer = [
      { id: 1, message: 'user signup', userId: 3 },
    ];
    wrapper.instance().componentWillReceiveProps(props.nextProps);
    expect(wrapper.state().allNotifications).toEqual(
      props.nextProps.NotificationReducer,
    );
  });

  it('Should show a popup when a user click on notification image/icon', () => {
    getLoggedInUser.mockImplementation(() => ({
      username: 'john',
      role: 'Admin',
    }));
    wrapper
      .find('.notification-icon')
      .simulate('click', { target: { name: 'notification' } });
    expect(wrapper.state().userNotification).toBeTruthy();
    expect(wrapper.state().profile).not.toBeTruthy();
  });

  it('Should display all notifications when a user click on notification image/icon', () => {
    getLoggedInUser.mockImplementation(() => ({ username: 'john' }));
    wrapper.instance().componentWillReceiveProps({
      NotificationReducer: [
        { id: 3, message: 'hello world', link: 'https://ji.me/io/lk' },
      ],
    });
    wrapper
      .find('.notification-icon')
      .simulate('click', { target: { name: 'notification' } });
    expect(wrapper.state().popup).toBeTruthy();
  });

  it('should display login and register when a user is not logged in', () => {
    getLoggedInUser.mockImplementation(() => ({ username: '' }));
    expect(getLoggedInUser().username).toEqual('');
  });
  it('Should not display SEE ALL  when there is  no notification ', () => {
    getLoggedInUser.mockImplementation(() => ({
      username: 'john',
      role: 'Admin',
    }));
    wrapper.instance().componentWillReceiveProps({ NotificationReducer: [] });
    wrapper
      .find('.notification-icon')
      .simulate('click', { target: { name: 'notification' } });
    expect(wrapper.state().notificationMsg).toEqual(
      <div className="when-no-notification">No notification yet</div>,
    );
  });

  it('Should show a popup when a user click on profile image/icon', () => {
    wrapper
      .find('.user-profile')
      .simulate('click', { target: { name: 'profile' } });
    expect(wrapper.state().userNotification).not.toBeTruthy();
    expect(wrapper.state().profile).toBeTruthy();
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
    instance.componentWillReceiveProps({ NotificationReducer: [] });
    expect(instance.state.notificationMsg.props.children).toBe(
      'No notification yet',
    );
  });
  it('should test if a notification can be clicked by a user in oerder to mark the m as read', () => {
    const instance = wrapper.instance();
    instance.componentWillReceiveProps({
      NotificationReducer: [
        { message: 'message', link: 'http://me.u', status: 'Unread', id: 1 },
      ],
    });
    wrapper
      .find('.user-profile')
      .simulate('click', { target: { name: 'notification' } });
    wrapper.find('.notifications').simulate('click', 1);
    expect(wrapper.state().isNotified).toBeTruthy();
  });

  it('should test if a notification will be displayed as read when retrieving them from the DB', () => {
    const instance = wrapper.instance();
    instance.componentWillReceiveProps({
      NotificationReducer: [
        { message: 'message', link: 'http://me.u', status: 'Read', id: 1 },
      ],
    });
    wrapper
      .find('.user-profile')
      .simulate('click', { target: { name: 'notification' } });
    expect(wrapper.state().isNotified).toBeFalsy();
  });
});
