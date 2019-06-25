import React from 'react';
import { mount } from 'enzyme';
import '../../enzymeConfig';

import {
  MessageDisplay,
  mapStateToprops,
} from '../../components/article/MessageDisplay';

const articleUpdate = {
  message: 'fafasfsaf',
  error: 'fafafa',
};
const props = {
  sweetalert: jest.fn(),
  articleUpdate,
  article: {
    error: 'error',
    article: [],
  },
};

const wrapper = mount(<MessageDisplay {...props} />);
describe('test for `MessageDisplay` component', () => {
  test('should render the `MessageDisplay`', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should test `UpdateMessageDisplay`', () => {
    const mockstate = {
      Article: {
        article: {},
      },
    };
    const state = mapStateToprops(mockstate);
    expect(state).toBeTruthy();
  });
});
