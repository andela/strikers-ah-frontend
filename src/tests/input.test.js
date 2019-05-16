/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Input from '../components/common/input';
import '../enzymeConfig';

const props = {
  labelStyle: 'label-styles',
  name: 'firstname',
  type: 'text',
  inputStyle: 'input-style',
  label: 'label',
  innerLabelStyle: 'inner-style',
  error: 'firstname must be 2 length in character',
  borderStyle: 'border-style',
  errorStyle: 'error-style',
  onChange: jest.fn(),
};

describe('<Input/>', () => {
  it('Should render <Input/> without crashing', () => {
    const input = shallow(<Input {...props} />);
    expect(input).toMatchSnapshot();
  });
});
