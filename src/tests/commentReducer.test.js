import '../enzymeConfig';
import {
  GET_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
} from '../redux/actionTypes/commentTypes';
import commentsReducer from '../redux/reducers/comment';

describe('TEST COMMENT REDUCER', () => {
  it('Should be able to update state on get all comments', () => {
    const state = {};
    const action = {
      type: GET_COMMENTS,
      payload: { comment: { id: 1, comment: 'this comment' } },
    };
    const reducedComment = commentsReducer(state, action);
    expect(reducedComment.comments).toEqual(action.payload);
  });
  it('Should be able to update state on creation of a new comment', () => {
    const state = {};
    const action = {
      type: ADD_COMMENT,
      payload: { comment: { id: 1, comment: 'this comment' } },
    };
    const reducedComment = commentsReducer(state, action);
    expect(reducedComment.comment).toEqual(action.payload);
  });
  it('Should be able to update state on creation of a new comment', () => {
    const state = {};
    const action = {
      type: DELETE_COMMENT,
      payload: { comment: { id: 1, comment: 'this comment' } },
    };
    const reducedComment = commentsReducer(state, action);
    expect(reducedComment.deleteMessage).toEqual(action.payload);
  });
});
