/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
// import localStorage from '../../utils/browserMock';
import '../enzymeConfig';
import Index from '../components/Index';

let wrapper;

describe('test Home page', () => {
  it('should test if the component renders when both localstorage token and query parameters are not provided', () => {
    wrapper = shallow(<Index />);
    expect(wrapper).toMatchSnapshot();
  });
});
