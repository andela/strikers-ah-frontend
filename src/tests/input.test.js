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
  error: { firstname: 'firstname must be 2 length in character' },
  borderStyle: 'border-style',
  errorStyle: 'error-style',
  onChange: jest.fn(),
};

describe('<Input/>', () => {
  it('Should render <Input/> without crashing', () => {
    const input = shallow(<Input {...props} />);
    expect(input).toMatchSnapshot();
  });

  it('should display an error message when input field is not valid', () => {
    const input = shallow(<Input {...props} />);
    expect(input.find('.error-style').text()).toBe(
      'firstname must be 2 length in character',
    );
    input.setProps({
      error: { lastname: 'lastname must be 2 length in character' },
      name: 'lastname',
    });
    expect(input.find('.error-style').text()).toBe(
      'lastname must be 2 length in character',
    );
  });

  it('should display an error message when another input fiel is not valid', () => {
    const input = shallow(<Input {...props} />);
    input.setProps({
      error: { lastname: 'lastname must be 2 length in character' },
      name: 'lastname',
    });
    expect(input.find('.error-style').text()).toBe(
      'lastname must be 2 length in character',
    );
  });

  it('should call handleChange when a user types-in', () => {
    const input = shallow(<Input {...props} />);
    input.find('.input-style').simulate('change');
    expect(props.onChange).toHaveBeenCalled();
  });
});
