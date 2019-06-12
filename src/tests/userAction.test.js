import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import axios from '../helpers/axios';
import {
  getUserProfile,
  editLoggedInUserProfile,
  getUserArticles,
} from '../redux/actions/userAction';

const midleware = [thunk];
const mockStore = configureStore(midleware);
describe('action tests', () => {
  beforeEach(() => {
    moxios.install(axios);
  });
  afterEach(() => {
    moxios.uninstall(axios);
  });

  test('should dispatch get user action', async () => {
    const store = mockStore({});

    const expectedState = { profile: { id: 1, username: 'mwibutsa' } };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(getUserProfile('')).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });
  test('should dispatch get user action failure', async () => {
    const store = mockStore({});

    const expectedState = { profile: { id: 1, username: 'mwibutsa' } };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: expectedState,
      });
    });

    return store.dispatch(getUserProfile('')).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });
  test('should dispatch edit loggedin user profile', () => {
    const store = mockStore({});

    const expectedState = { error: {} };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });
    const user = {
      username: 'username',
      email: 'email@host.com',
      firstnae: 'firstname',
    };
    return store.dispatch(editLoggedInUserProfile(user)).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });
  test('should dispatch edit loggedin user profile failure', () => {
    const store = mockStore({});

    const expectedState = { error: {} };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 401,
        response: expectedState,
      });
    });
    const user = {
      username: 'username',
      email: 'email@host.com',
      firstnae: 'firstname',
    };
    return store.dispatch(editLoggedInUserProfile(user)).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });
  test('should dispatch get user articles', () => {
    const store = mockStore({});
    const expectedState = {
      articles: { id: 1, slug: 'any-article-slug12453' },
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });
    const user = {
      username: 'username',
      email: 'email@host.com',
      firstname: 'firstname',
    };
    return store.dispatch(getUserArticles(user.username)).then(() => {
      expect(store.getActions().length).toBeDefined();
    });
  });
  test('should dispatch get user articles failure', () => {
    const store = mockStore({});
    const expectedState = { profile: { id: 1, username: 'mwibutsa' } };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: { data: expectedState },
      });
    });
    const user = {
      username: 'username',
      email: 'email@host.com',
      firstname: 'firstname',
    };
    return store.dispatch(getUserArticles(user.username)).then(() => {
      expect(store.getActions().length).toBeDefined();
    });
  });
});
