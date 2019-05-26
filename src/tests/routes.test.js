import React from 'react';
import { shallow } from 'enzyme';
import '../enzymeConfig';
import routes from '../router';

// eslint-disable-next-line react/jsx-filename-extension
const wrapper = shallow(<routes />);

describe('`routes.js`', () => {
  test('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
