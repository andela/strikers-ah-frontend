import React from 'react';
import '../enzymeConfig';
import { ReadArticle } from '../components/article/ReadArticle';
import { getComponent } from './profile/test-helpers';

describe('TEST READ ARTICLE WITH COMMENTS', () => {
  let wrapper;
  let instance;
  let props;
  beforeEach(() => {
    props = {
      comments: [{ id: 1, comment: 'this is good' }],
      match: { params: { slug: 'slug' } },
      getComments: jest.fn(),
      getOneArticle: jest.fn(),
      article: { article: [{ id: 1, slug: 'slug' }] },
    };
    wrapper = getComponent(<ReadArticle {...props} />);
    instance = wrapper.instance();
  });
  test('it should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('shoul be able to toggle edit comment form', () => {
    instance.toggleEditCommentForm(1, true);
  });
  it('should be able to add comments to the list when created', () => {
    instance.componentWillReceiveProps({ comment: 'this comment' });
  });
});
