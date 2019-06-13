import commentLike from '../../../redux/reducers/commentLike';
import * as actionTypes from '../../../redux/actionTypes/commentLike';

const initialState = {};

describe('test for like comment', () => {
  test('should test inital tate', () => {
    expect(commentLike(undefined, {})).toEqual(initialState);
  });
  test('should test `LIKE_COMMENT_SUCCESS`', () => {
    const payload = {
      like: {
        slug: 'jflaksjf-8797',
        id: '27',
      },
    };
    const newState = commentLike(initialState, {
      type: actionTypes.LIKE_COMMENT_SUCCESS,
      payload,
    });
    expect(newState.like).toEqual(payload);
  });
  test('should test `LIKE_COMMENT_SUCCESS`', () => {
    const payload = {
      message: '',
    };
    const newState = commentLike(initialState, {
      type: actionTypes.LIKE_COMMENT_FAIL,
      payload,
    });
    expect(newState.message).toEqual(payload);
  });
});
