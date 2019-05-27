import { login, logout } from '../../../actions/login.actions';

const credentials = {
  email: 'test@email.com',
  password: '#$#2!@4$AQ',
};
describe('login.actions.js', () => {
  test('should logout action', () => {
    logout();
    expect();
  });
  test('should login action', () => {
    login(credentials.email, credentials.password);
    expect();
  });
});
