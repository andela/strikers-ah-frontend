import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import '../../../enzymeConfig';
import getSocialUser from '../../../redux/actions/socialLogin';

const mockStore = configureStore([thunk]);
const store = mockStore();

describe('getSocialUser.js', () => {
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('should ', () => {
    const expectedReturn = {
      type: 'GET_SOCIAL_USER',
      payload: {
        username: 'frank',
        email: 'harfrak3@gmail.com',
      },
    };
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZmlyc3RuYW1lIjpudWxsLCJsYXN0bmFtZSI6bnVsbCwidXNlcm5hbWUiOiJmcmFuayIsImVtYWlsIjoiaGFyZnJhazNAZ21haWwuY29tIiwiaW1hZ2UiOm51bGwsImlhdCI6MTU1OTgwOTMwMSwiZXhwIjoxNTU5ODk1NzAxfQ.wfrP4FZzWxawmsI7kFPGA5m7ZVvw4sfU90SuruwW7ck';

    const result = getSocialUser(token);
    expect(result).toEqual(expectedReturn);
  });
});
