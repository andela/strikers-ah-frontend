import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import '../../../enzymeConfig';
import {
  forgotPassword,
  resetPassword,
} from '../../../redux/actions/forgotPassword';
import axios from '../../../helpers/axios';

const mockStore = configureStore([thunk]);
const store = mockStore();

describe('forgot password', () => {
  beforeEach(() => {
    moxios.install(axios);
    store.clearActions(axios);
  });
  afterEach(() => {
    moxios.uninstall(axios);
  });
  test('should ', () => {
    const expectedState = {
      response: {},
    };
    const email = 'emabush@gmail.com';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        response: expectedState,
      });
    });

    return store.dispatch(forgotPassword(email)).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });

  test('should ', () => {
    const expectedState = {
      response: {},
    };
    const email = '';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: expectedState,
      });
    });

    return store.dispatch(forgotPassword(email)).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });

  test('should ', () => {
    const expectedState = {
      response: {},
    };
    const password = 'emabush@Fa23';
    const token = '';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        response: expectedState,
      });
    });

    return store.dispatch(resetPassword(password, token)).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });

  test('should ', () => {
    const expectedState = {
      response: {},
    };
    const password = 'emabush@Fa23';
    const token = '';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: expectedState,
      });
    });

    return store.dispatch(resetPassword(password, token)).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });
});
