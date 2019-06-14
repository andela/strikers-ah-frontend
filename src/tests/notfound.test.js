import { shallow } from 'enzyme';
import React from 'react';

import '../enzymeConfig';
import NotFound from '../components/notfound';

describe('Should render notfound components', () => {
  test('should render not found component', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});
