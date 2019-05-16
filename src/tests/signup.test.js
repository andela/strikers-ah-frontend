/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import '../enzymeConfig';
import Signup from '../components/signup';

// const props = {
//     data: '',
//     errors: '',
//     stateChange: jest.fn(),
//     isSubmitted: jest.fn()
// };

describe('<Signup/>', () => {
  it('Should render <Signup/> without crashing', () => {
    const signup = shallow(<Signup />);
    expect(signup).toMatchSnapshot();
  });
});
