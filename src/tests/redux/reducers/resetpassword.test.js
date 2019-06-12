import '../../../enzymeConfig';
import {
  FORGOT_PASSWORD,
  RESET_PASSWORD,
} from '../../../redux/actionTypes/userTypes';
import { forgotPassword } from '../../../redux/reducers/resetpassword';

const initialState = [];
const data = {
  message: 'success',
  email: 'example@gmail.com',
};
const action = {
  type: FORGOT_PASSWORD,
  payload: data,
};
const action2 = {
  type: RESET_PASSWORD,
  payload: data,
};
describe('Reducer forgotpassword.js', () => {
  test('should update the store', () => {
    const response = forgotPassword(initialState, action);
    expect(response.response).toBe(data);
  });
  test('should update the store', () => {
    const response = forgotPassword(initialState, action2);
    expect(response.response).toBe(data);
  });
});
