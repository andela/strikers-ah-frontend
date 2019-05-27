/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import '../../enzymeConfig';
import Input from '../../components/common/textInput';
import TextArea from '../../components/common/textArea';
import { findByTestAttribute } from './test-helpers';

describe('Test inputs', () => {
  describe('Test <Input />', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        name: 'name',
        value: 'value',
        error: 'error',
        handleChange: jest.fn(),
        label: 'input',
      };
      wrapper = shallow(<Input {...props} />);
    });

    it('Shoudl render a input Component', () => {
      const input = findByTestAttribute(wrapper, 'inputComponent');
      expect(input.length).toBe(1);
    });
  });

  describe('<TextArea />', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        name: 'name',
        value: 'value',
        error: 'error',
        handleChange: jest.fn(),
        label: 'TextArea',
      };
      wrapper = shallow(<TextArea {...props} />);
    });

    it('Should render a input Component', () => {
      const textArea = findByTestAttribute(wrapper, 'textAreaComponent');
      expect(textArea.length).toBe(1);
    });
  });
});
