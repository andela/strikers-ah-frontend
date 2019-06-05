import jwt from 'jsonwebtoken';
import '../enzymeConfig';
import { getLoggedInUser } from '../helpers/authentication';

describe('Test Authentication helpers', () => {
  beforeEach(() => {
    const token = jwt.sign({ username: 'username' }, 'secretKey');
    localStorage.clear();
    window.localStorage.setItem('token', `${token}`);
    window.localStorage.token = token;
  });
  afterEach(() => {
    window.localStorage.clear();
  });
  it('should be able to get current logged in user', () => {
    const user = getLoggedInUser();
    expect(user).toBeDefined();
  });
});
