import '../../../enzymeConfig';
import { USER_NOTIFICATION } from '../../../redux/actionTypes/userTypes';
import notifications from '../../../redux/reducers/notifications';

const initialState = [];
const payload = {
  message: 'success',
  status: 'true',
};

describe('Reducer notifications.js', () => {
  test('should update the store', () => {
    const newState = notifications(initialState, {
      type: USER_NOTIFICATION,
      payload,
    });
    expect(newState.emails).toEqual(payload);
  });
});
