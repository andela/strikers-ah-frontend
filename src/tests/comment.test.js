import React from 'react';
import JsonWebToken from 'jsonwebtoken';
import '../enzymeConfig';
import { getComponent, findByTestAttribute } from './profile/test-helpers';
import Comment from '../components/comment/comment';

localStorage.setItem(
  'token',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RuYW1lIjpudWxsLCJsYXN0bmFtZSI6bnVsbCwidXNlcm5hbWUiOiJKYWNxdWVzIiwiZW1haWwiOiJqYWNrbnlpbGlua2luZGlAZ21haWwuY29tIiwiaW1hZ2UiOiJodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvMTEyMzg4OTYwNzI4MjY5MjEwNS9XcVN0djBMdy5qcGciLCJpYXQiOjE1NjAxNTE2NjgsImV4cCI6MTU2MDIzODA2OH0.a-rDomBccLRSuE3YpA_2TkpNcsk-cPqUneE8ie48HKQ',
);
let props = {
  comment: {
    comment: { body: 'this body', id: 1 },
    author: { image: 'image.png' },
    history: [{}, {}, {}],
  },
  deleteComment: jest.fn(),
  slug: 'Slug',
  editComment: jest.fn(),
  formId: 1,
  editMode: true,
  commentHistoryId: 1,
  toggleEditCommentForm: jest.fn(),
  toggleEditHistory: jest.fn(),
  editHistoryMode: true,
};
let wrapper = getComponent(<Comment {...props} />);
const instance = wrapper.instance();

describe('TEST COMMENT', () => {
  let token;
  let commentComponent;
  beforeEach(() => {
    token = JsonWebToken.sign({ id: 1, role: 'Admin' }, 'secretKey');
    commentComponent = wrapper.instance();
    localStorage.setItem('token', token);
  });

  it('Should render a comment component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should be able to delete a comment', () => {
    const button = findByTestAttribute(wrapper, 'deleteButton');
    button.simulate('click', {});
    commentComponent.canEdit(false, true);
    commentComponent.assignRole({ role: 'role' }, 'User');
    expect(commentComponent.props.deleteComment).toHaveBeenCalled();
  });

  it('should be able to edit  a comment', () => {
    const button = findByTestAttribute(wrapper, 'editButton');
    button.simulate('click', {});
    expect(commentComponent.props.toggleEditCommentForm).toHaveBeenCalled();
  });

  describe('', () => {
    beforeEach(() => {
      localStorage.clear();
    });
    it('should be able to delete a comment', () => {
      props = {
        comment: {
          id: 1,
          comment: { body: 'this body', id: 1 },
          author: { image: 'image.png', username: 'thisis' },
        },
        deleteComment: jest.fn(),
        slug: 'Slug',
        editComment: jest.fn(),
        formId: 1,
        toggleEditCommentForm: jest.fn(),
        editMode: true,
      };
      wrapper = getComponent(<Comment {...props} />);
      wrapper.setProps(props);
      commentComponent = wrapper.instance();
      const button = findByTestAttribute(wrapper, 'closeButton');
      button.simulate('click', {});
      const commentForm = findByTestAttribute(wrapper, 'commentFormComponent');
      commentForm.props().saveComment();
      expect(commentComponent.props.toggleEditCommentForm).toHaveBeenCalledWith(
        true,
      );
    });
    // it('should be able to track comment edit history', () => {
    //   const button = findByTestAttribute(wrapper, 'trackEditButton');
    //   button.simulate('click', {});
    //   expect(commentComponent.props().toggleEditHistory).toHaveBeenCalled();
    // });
    it('should show track edit history section', () => {
      jest.spyOn(wrapper.instance(), 'handleEditComment');
      instance.handleEditComment();
      expect(props.toggleEditCommentForm).toHaveBeenCalled();
    });
  });
});
