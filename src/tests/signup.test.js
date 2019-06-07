/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import '../enzymeConfig';
import Signup from '../components/signup';

const props = {
  data: {},
  errors: {},
  stateChange: jest.fn(),
  isSubmitted: jest.fn(),
};

describe('<Signup/>', () => {
  it('Should render <Signup/> without crashing', () => {
    const signup = shallow(<Signup {...props} />);
    expect(signup).toMatchSnapshot();
  });

  it('Should call handleStateChange function when updating errors in the local state', () => {
    const signup = shallow(<Signup {...props} />);
    signup.instance().handleChangeState({
      errors: { firstname: 'firstname must be a string' },
    });
    expect(signup.state().errors.firstname).toBe('firstname must be a string');
  });

  it('Should call handleStateChange function when updating data in the local state', () => {
    const signup = shallow(<Signup {...props} />);
    signup.instance().handleChangeState({ data: { firstname: 3 } });
    expect(signup.state().data.firstname).toBe(3);
  });

  it('Should change state when form is submitted', () => {
    const signup = shallow(<Signup {...props} />);
    signup.instance().handleSubmitedForm();
    expect(signup.state().isFormSubmitted).toBeTruthy();
  });
});
