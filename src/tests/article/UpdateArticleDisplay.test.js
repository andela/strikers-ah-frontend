import React from 'react';
import { shallow } from 'enzyme';
import '../../enzymeConfig';

import {
  UpdateMessageDisplay,
  mapStateToprops,
} from '../../components/article/UpdateMessageDisplay';

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

const Wrapper = shallow(<UpdateMessageDisplay {...props} />);

describe('test for `UpdateMessageDisplay` component', () => {
  test('should render `UpdateMessageDisplay`', () => {
    expect(Wrapper).toMatchSnapshot();
  });

  test('should test `mapstatetoprops`', () => {
    const mockedState = {
      Article: {
        article: {
          articleUpdate: {},
        },
      },
    };

    const state = mapStateToprops(mockedState);
    expect(state).toBeTruthy();
  });
});
