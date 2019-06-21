import React from 'react';
import { shallow } from 'enzyme';
import '../../enzymeConfig';

import {
  SocialMedia,
  mapStateToprops,
} from '../../components/article/SocialMedia';

const props = {
  article: {
    title: 'this is the title',
  },
};

const wrapper = shallow(<SocialMedia {...props} />);
describe('test for social media sharing tests', () => {
  test('should render the `SocialMedia` component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should test `mapstatetoprops`', () => {
    const mockedState = {
      Article: {
        article: {},
      },
    };
    const state = mapStateToprops(mockedState);
    expect(state).toBeTruthy();
  });
});
