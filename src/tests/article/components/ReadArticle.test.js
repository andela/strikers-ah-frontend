/* eslint-disable no-dupe-keys */
import React from 'react';
import { shallow } from 'enzyme';
import '../../../enzymeConfig';

import { ReadArticle } from '../../../components/article/ReadArticle';

const props = {
  match: {
    params: jest.fn(),
  },
  getOneArticle: jest.fn(),
  getComments: jest.fn(),
  article: {
    article: {
      taglist: ['tag1', 'tag2'],
    },
  },
};

const wrapper = shallow(<ReadArticle {...props} />);

describe('test for `ReadArticle` component', () => {
  test('should render the `ReadArticle` component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
