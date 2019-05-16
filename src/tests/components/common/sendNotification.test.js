/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import '../../../enzymeConfig';
import EmailNotification from '../../../components/sendEmailNotification';
import findAttribute from '../../../../utils/index';

const props = {
  email: 'user@email.com',
};

const shallowComponent = () => {
  const component = shallow(<EmailNotification {...props} />);
  return component;
};
describe('REndering Email Notification', () => {
  it('Should render Wrap element', () => {
    const component = shallowComponent();
    const wrap = findAttribute(component, 'wrap');
    expect(wrap.length).toBe(1);
  });

  it('Should render Email header element', () => {
    const emailHeader = shallowComponent();
    const header = findAttribute(emailHeader, 'header');
    expect(header.length).toBe(1);
  });

  it('Should render Email confirmation message', () => {
    const confirmationMessage = shallowComponent();
    const header = findAttribute(confirmationMessage, 'sub-header');
    expect(header.length).toBe(1);
  });

  it('Should render Email', () => {
    const confirmationMessage = shallowComponent();
    const header = findAttribute(confirmationMessage, 'userEmail');
    expect(header.length).toBe(1);
  });

  it('Should render Email', () => {
    const confirmationMessage = shallowComponent(props);
    const email = findAttribute(confirmationMessage, 'userEmail').text();
    expect(email).toBe(props.email);
  });
});
