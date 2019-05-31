import React from 'react';
import '../enzymeConfig';
import { getComponent } from './profile/test-helpers';
import UserArticle from '../components/common/userArticle';

describe('TEST USER ARTICLE', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      articles: {
        title: 'this tile',
        description: 'this description',
        views: 0,
        slug: 'randomy-dummy-slug213',
      },
    };
    wrapper = getComponent(<UserArticle {...props} />);
  });

  test('it should render user article component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
