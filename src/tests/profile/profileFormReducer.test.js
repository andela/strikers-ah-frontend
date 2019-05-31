/* eslint-disable no-undef */
import '../../enzymeConfig';
import profileFromReducer from '../../redux/reducers/profileFormReducer';
import { VALUE_CHANGE, ADD_IMAGE } from '../../redux/actionTypes/formTypes';

describe('User Reducer', () => {
  it('Should update user state on get user action', () => {
    const expectedState = { name: 'anyName', password: 'thisGuysPassword' };
    const action = { type: VALUE_CHANGE, payload: expectedState };
    const newState = profileFromReducer({}, action);
    expect(Object.keys(newState.values)).toContain('password');
  });
  it('Should update user state on get user action', () => {
    const expectedState = {
      name: 'anyName',
      image: 'thisguysprofileimage.jpg',
    };
    const action = { type: ADD_IMAGE, payload: expectedState };
    const newState = profileFromReducer({}, action);
    expect(Object.keys(newState.values)).toContain('image');
  });
});
