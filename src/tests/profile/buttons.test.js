/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import '../../enzymeConfig';
import { findByTestAttribute } from './test-helpers';
import SubmitButton from '../../components/common/SubmitButton';
import ProfileButton from '../../components/common/profileButton';

describe('Button Tests', () => {
  describe('<SubmitButton />', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<SubmitButton label="Submit" />);
    });

    it('Should render a submit button', () => {
      const button = findByTestAttribute(wrapper, 'submitButtonComponent');
      expect(button.length).toBe(1);
    });
  });

  describe('<ProfileButton />', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        link: '/',
        label: 'Label text',
        handleClick: jest.fn(),
      };
      wrapper = shallow(<ProfileButton {...props} />);
    });

    it('Should render a submit button', () => {
      const button = findByTestAttribute(wrapper, 'profileButtonComponent');
      expect(button.length).toBe(1);
    });
  });
});
