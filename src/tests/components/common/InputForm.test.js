import React from 'react';
import { shallow } from 'enzyme';
import '../../../enzymeConfig';
import CreateAccount from '../../../components/common/InputForm';

// eslint-disable-next-line react/jsx-filename-extension
const wrapper = shallow(<CreateAccount />);

describe('`InputForm.jsx`', () => {
  test('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
