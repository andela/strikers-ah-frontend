import React from 'react';
import { shallow } from 'enzyme';
import '../../../enzymeConfig';
import CreateAccount from '../../../components/common/CreateAccount';

// eslint-disable-next-line react/jsx-filename-extension
const wrapper = shallow(<CreateAccount />);

describe('`CreateAccount.jsx`', () => {
  test('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
