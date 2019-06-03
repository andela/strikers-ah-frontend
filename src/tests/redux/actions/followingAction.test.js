import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import '../../../enzymeConfig';
import {
  followUser,
  unfollowUser,
  checkProfileFollowStatus,
} from '../../../redux/actions/followingAction';
import axios from '../../../helpers/axios';

const mockStore = configureStore([thunk]);
const store = mockStore();

describe('forgot password', () => {
  beforeEach(() => {
    moxios.install(axios);
  });
  afterEach(() => {
    moxios.uninstall(axios);
  });
  test('should ', () => {
    const expectedState = {
      response: {
        payload: 'following',
      },
    };
    const username = 'frank';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        response: expectedState,
      });
    });

    return store.dispatch(followUser(username)).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });

  test('should ', () => {
    const expectedState = {
      response: {},
    };
    const username = '';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: expectedState,
      });
    });

    return store.dispatch(followUser(username)).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });

  test('should ', () => {
    const expectedState = {
      response: {
        payload: 'follow',
      },
    };
    const username = 'frank';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        response: expectedState,
      });
    });

    return store.dispatch(unfollowUser(username)).then(() => {
      expect(store.getActions().length).toBe(2);
    });
  });

  test('should ', () => {
    const expectedState = {
      response: {},
    };
    const username = '';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: expectedState,
      });
    });

    return store.dispatch(unfollowUser(username)).then(() => {
      expect(store.getActions().length).toBe(2);
    });
  });

  test('should ', () => {
    const expectedState = {
      response: {
        payload: 'follow',
      },
    };
    const username = 'frank';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        response: expectedState,
      });
    });

    return store.dispatch(checkProfileFollowStatus(username)).then(() => {
      expect(store.getActions().length).toBe(3);
    });
  });

  test('should ', () => {
    const expectedState = {
      response: {},
    };
    const username = '';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: expectedState,
      });
    });

    return store.dispatch(checkProfileFollowStatus(username)).then(() => {
      expect(store.getActions().length).toBe(3);
    });
  });
});
