import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import '../../../enzymeConfig';
import {
  emailNotifications,
  emailNotificationsStatus,
} from '../../../redux/actions/Notifications';
import axios from '../../../helpers/axios';

const mockStore = configureStore([thunk]);
const store = mockStore();

describe('notifications.js', () => {
  beforeEach(() => {
    moxios.install(axios);
    // store.clearActions();
  });
  afterEach(() => {
    moxios.uninstall(axios);
  });
  test('should ', () => {
    const expectedState = {
      payload: {
        message: '',
        status: '',
      },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        response: expectedState,
      });
    });
    return store.dispatch(emailNotifications()).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });

  test('should ', () => {
    // JSON.parse = jest.fn();
    const expectedState = {
      payload: {
        message: '',
        status: '',
      },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: expectedState,
      });
    });
    return store.dispatch(emailNotifications()).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });
  test('should ', () => {
    const expectedState = {
      payload: {
        message: '',
        status: '',
      },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        response: expectedState,
      });
    });
    return store.dispatch(emailNotificationsStatus()).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });
});
