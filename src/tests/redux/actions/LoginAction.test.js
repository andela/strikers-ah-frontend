import { login, logout } from '../../../actions/login.actions';

describe('`login.actions.js`', () => {
  test('should logout', () => {
    logout();
    expect();
  });
  test('should login', () => {
    const credentials = {
      email: 'test@email.com',
      password: '#$#2!@4$AQ',
    };
    login(credentials.email, credentials.password);
    expect();
  });
});
