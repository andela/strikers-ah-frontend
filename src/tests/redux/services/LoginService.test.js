import loginService from '../../../services/login.service';

const credentials = {
  email: 'test@email.com',
  password: '#$#2!@4$AQ',
};
describe('login.service.js', () => {
  test('should logout action', () => {
    loginService.logout();
    expect();
  });
  test('should login action', () => {
    loginService.login(credentials.email, credentials.password);
    expect();
  });
});
