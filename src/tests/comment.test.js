import React from 'react';
import JsonWebToken from 'jsonwebtoken';
import { shallow } from 'enzyme';
import '../enzymeConfig';
import { getComponent, findByTestAttribute } from './profile/test-helpers';
import { Comment, mapStateToprops } from '../components/comment/comment';

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
      LikeComment: jest.fn(),
      likecomment: {
        message: 'comment liked',
      },
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
  test('should test the like button', () => {
    const Wrapper = shallow(<Comment {...props} />);
    const spy = jest.spyOn(Wrapper.instance(), 'likeComment');
    Wrapper.update();
    const likeButton = Wrapper.find('#like');
    likeButton.simulate('click');
    expect(spy).toHaveBeenCalled();
  });
  test('should show the last displayed value', () => {
    const mockedState = {
      like: {
        like: {
          likecomment: 'comment liked',
        },
      },
    };
    const state = mapStateToprops(mockedState);
    expect(state).toBeTruthy();
  });
});
