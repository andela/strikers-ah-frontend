/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import '../enzymeConfig';
import HomeNavBar from '../components/homeNavBar';

describe('<HomeNavBar/>', () => {
  it('Should render navbar with user logged in', () => {
    const navBar = shallow(<HomeNavBar user="uiiii" />);
    expect(navBar).toMatchSnapshot();
  });

  it('Should render navbar without user logged in', () => {
    const navBar = shallow(<HomeNavBar />);
    expect(navBar).toMatchSnapshot();
  });
});
