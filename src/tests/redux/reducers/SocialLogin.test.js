import '../../../enzymeConfig';
import { GET_SOCIAL_USER } from '../../../redux/actionTypes/userTypes';
import { socialLoginUser } from '../../../redux/reducers/socialLogin';

const initialState = [];
const payload = {
  message: 'success',
  email: 'example@gmail.com',
};

describe('Reducer SocialLogin.js', () => {
  test('should update the store', () => {
    const newState = socialLoginUser(initialState, {
      type: GET_SOCIAL_USER,
      payload,
    });
    expect(newState.LoggedInUser).toEqual(payload);
  });
});
