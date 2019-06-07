import React from 'react';
import JsonWebToken from 'jsonwebtoken';
import '../enzymeConfig';
import { getComponent, findByTestAttribute } from './profile/test-helpers';
import Comment from '../components/comment/comment';

describe('TEST COMMENT', () => {
  let wrapper;
  let props;
  let token;
  let commentComponent;
  beforeEach(() => {
    token = JsonWebToken.sign({ id: 1 }, 'secretKey');
    localStorage.setItem('token', token);
    props = {
      comment: {
        comment: { body: 'this body', id: 1 },
        author: { image: 'image.png' },
      },
      deleteComment: jest.fn(),
      slug: 'Slug',
      editComment: jest.fn(),
      formId: 1,
      toggleEditCommentForm: jest.fn(),
      editMode: true,
    };
    wrapper = getComponent(<Comment {...props} />);
    commentComponent = wrapper.instance();
  });
  it('Should render a comment component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Should render a comment component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should be able to delete a comment', () => {
    const button = findByTestAttribute(wrapper, 'deleteButton');
    button.simulate('click', {});
    expect(commentComponent.props.deleteComment).toHaveBeenCalled();
  });
  it('should be able to edit  a comment', () => {
    const button = findByTestAttribute(wrapper, 'editButton');
    button.simulate('click', {});
    expect(commentComponent.props.toggleEditCommentForm).toHaveBeenCalled();
  });
});
