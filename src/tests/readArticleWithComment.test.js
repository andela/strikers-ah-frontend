/* eslint-disable no-dupe-keys */
import React from 'react';
import '../enzymeConfig';
import { ReadArticle } from '../components/article/ReadArticle';
import { getComponent, findByTestAttribute } from './profile/test-helpers';

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
      toggleEditCommentForm: jest.fn(),
      toggleEditHistory: jest.fn(),
      article: {
        article: {
          taglist: ['tag1', 'tag2'],
        },
      },
    };
    wrapper = getComponent(<ReadArticle {...props} />, {}, { ...props });
    instance = wrapper.instance();
    jest.spyOn(instance, 'toggleEditCommentForm');
    jest.spyOn(instance, 'toggleEditHistory');
  });
  afterEach(() => {
    instance.toggleEditCommentForm.mockClear();
    instance.toggleEditHistory.mockClear();
  });
  test('it should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should be able to toggle edit comment form', () => {
    const elem = findByTestAttribute(wrapper, 'commentComponent');
    elem.props().toggleEditCommentForm(1, false);
    expect(instance.toggleEditCommentForm).toBeCalledTimes(1);
  });
  it('should be able to toggle edit edit history', () => {
    const elem = findByTestAttribute(wrapper, 'commentComponent');
    elem.props().toggleEditHistory(false);
    expect(instance.toggleEditHistory).toBeCalledTimes(1);
  });
  it('should be able to call edit history', () => {
    instance.toggleEditHistory(1, true);
  });
  it('should be able to add comments to the list when created', () => {
    instance.componentWillReceiveProps({ comment: 'this comment' });
  });
  it('should be able to add comments to the list when created1', () => {
    props.comments = [
      { id: 1, comment: 'this is good' },
      { id: 2, comment: 'this is good' },
      { id: 3, comment: 'this is good' },
    ];
    wrapper = getComponent(<ReadArticle {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should be able to add comments to the list when created1', () => {
    props.comments = [];
    wrapper = getComponent(<ReadArticle {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should be able to add comments to the list when created1', () => {
    props.comments = false;
    wrapper = getComponent(<ReadArticle {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
