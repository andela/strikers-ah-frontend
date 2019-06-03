import '../../../enzymeConfig';
import {
  FOLLOW,
  UNFOLLOW,
  FOLLOW_STATUS,
} from '../../../redux/actionTypes/userTypes';
import { following } from '../../../redux/reducers/Following';

const initialState = [];

const action = {
  type: FOLLOW,
  0: {
    status: 'following',
  },
};
const action2 = {
  type: UNFOLLOW,
  0: {
    status: 'follow',
  },
};
const action3 = {
  type: FOLLOW_STATUS,
  0: {
    status: '',
  },
};
describe('Reducer Following.js', () => {
  test('should update the store', () => {
    const response = following(initialState, action);
    expect(response.response).toBe(action.status);
  });
  test('should update the store', () => {
    const response = following(initialState, action2);
    expect(response.response).toBe(action2.status);
  });
  test('should update the store', () => {
    const response = following(initialState, action3);
    expect(response.response).toBe(action3.status);
  });
});
