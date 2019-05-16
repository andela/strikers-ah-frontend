/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import moxios from 'moxios';
import Axios from 'axios';
import { shallow } from 'enzyme';

import Form from '../components/form';
import '../enzymeConfig';

const props = {
  onSubmit: jest.fn(),
  onChange: jest.fn(),
  errors: {
    email: 'enter a valid email',
    error: 'both email and username are in use',
  },
};

const axios = Axios.create({
  baseURL: 'https://strikers-ah-backend.herokuapp.com/api/',
});
describe('<Form/>', () => {
  beforeEach(() => {
    moxios.install(axios);
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });

  it('Should render <Form/> without crashing', () => {
    const form = shallow(<Form {...props} />);
    expect(form).toMatchSnapshot();
  });

  // it('should post new user info', () => {
  //     moxios.stubRequest(
  //         `https://strikers-ah-backend.herokuapp.com/api/auth/signup`, {
  //             status: 201,
  //             response: {
  //                 user: {
  //                     username: '',
  //                     email: '',
  //                     bio: '',
  //                     image: '',
  //                     token: ''

  //                 }
  //             }
  //         }
  //     );

  // })
});
