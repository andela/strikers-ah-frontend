/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
// import localStorage from '../../utils/browserMock';
import '../enzymeConfig';
import { Index } from '../components/Index';

const props = {
  location: {
    search: '',
  },
  getSocialUser: jest.fn(),
  socialLoginUser: {
    LoggedInUser: {
      username: 'Doe',
    },
  },
  localStorage: {
    getItem: jest.fn(),
  },
};
let wrapper;

describe('test Home page', () => {
  it('should test if the component renders when both localstorage token and query parameters are not provided', () => {
    localStorage.setItem('token', '');
    wrapper = shallow(<Index {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should test if a there was no user already logged in', () => {
    localStorage.setItem(
      'token',
      'bdkfjhwhiwue2321djfbksdhkndkfjhwmcnksjdmbndkkjbdk',
    );
    wrapper = shallow(<Index {...props} />);
    expect(props.getSocialUser).toHaveBeenCalledWith(
      localStorage.getItem('token'),
    );
  });

  it('Should test if there is a user logged in using social account', () => {
    props.location.search = '?token=jhdjhsdjhgjhsdg';
    wrapper = shallow(<Index {...props} />);
    expect(props.getSocialUser).toBeCalledWith('jhdjhsdjhgjhsdg');
  });

  it('Should render when username is not provided', () => {
    props.socialLoginUser.LoggedInUser.username = '';
    wrapper = shallow(<Index {...props} />);
  });
});
