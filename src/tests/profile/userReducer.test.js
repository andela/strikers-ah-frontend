/* eslint-disable no-undef */
import '../../enzymeConfig';
import userReducer from '../../redux/reducers/userReducer';
import {
  GET_USER_PROFILE,
  EDIT_USER_PROFILE,
} from '../../redux/actionTypes/userTypes';

describe('User Reducer', () => {
  let expectedState;
  beforeEach(() => {
    expectedState = {
      name: 'mwibutsa',
    };
  });
  it('Should update user state on get user action', () => {
    const action = { type: GET_USER_PROFILE, payload: expectedState };
    const newState = userReducer({ user: { profile: {} } }, action);

    expect(newState.user).toBe(expectedState);
  });

  it('Should update user state on edit user action', () => {
    const action = { type: EDIT_USER_PROFILE, payload: expectedState };
    const newState = userReducer({ user: { profile: {} } }, action);
    expect(Object.keys(newState.user)).toContain('name');
  });
});
