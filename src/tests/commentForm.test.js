import React from 'react';
import '../enzymeConfig';
import CommentForm from '../components/comment/commentForm';
import { getComponent } from './profile/test-helpers';

describe('TEST COMMENT FORM', () => {
  let wrapper;
  let instance;
  let props;
  const event = {
    target: { name: 'comment', value: 'comment value' },
    preventDefault: jest.fn(),
  };
  beforeEach(() => {
    props = {
      currentValue: 'this value',
      buttonLabel: 'Comment',
      saveComment: jest.fn(),
    };
    wrapper = getComponent(<CommentForm {...props} />);
    instance = wrapper.instance();
  });
  it('should render a comment form', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('On value change', () => {
    instance.handleChange(event);
    expect(instance.state.comment).toEqual('comment value');
  });

  test('On submit', () => {
    instance.handleSubmit(event);
  });

  describe('should add a default button label', () => {
    beforeEach(() => {
      delete props.buttonLabel;
      wrapper = getComponent(<CommentForm {...props} />);
      instance = wrapper.instance();
    });
    it('should generate a default button label', () => {
      expect(instance.props.buttonLabel).toBeUndefined();
    });
  });
});
