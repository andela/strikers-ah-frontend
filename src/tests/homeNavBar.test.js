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
  it('Should render navbar with user logged in', () => {
    const navBar = shallow(<HomeNavBar {...props} />);
    expect(navBar).toMatchSnapshot();
  });

  it('Should render navbar without user logged in', () => {
    const navBar = shallow(<HomeNavBar {...props} />);
    expect(navBar).toMatchSnapshot();
  });
});
