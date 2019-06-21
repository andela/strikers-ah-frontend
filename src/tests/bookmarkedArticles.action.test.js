import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import axios from '../helpers/axios';
import {
  getBookmarkedArticles,
  getReadingStatsArticles,
} from '../redux/actions/bookmarkedArticles';

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

    const expectedState = { comments: { id: 1, body: 'mwibutsa' } };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(getBookmarkedArticles()).then(() => {
      expect(store.getActions().length).toBeDefined();
    });
  });
  test('should dispatch get user action', async () => {
    const store = mockStore({});

    const expectedState = { comments: { id: 1, body: 'mwibutsa' } };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: expectedState,
      });
    });

    return store.dispatch(getBookmarkedArticles()).then(() => {
      expect(store.getActions().length).toBeDefined();
    });
  });

  //
  test('should dispatch get reading stats', async () => {
    const store = mockStore({});

    const expectedState = { statsArticles: [{ id: 1, body: 'mwibutsa' }] };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(getReadingStatsArticles()).then(() => {
      expect(store.getActions().length).toBeDefined();
    });
  });
  test('should dispatch get error', async () => {
    const store = mockStore({});

    const expectedState = { statsArticles: [{ id: 1, body: 'mwibutsa' }] };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: expectedState,
      });
    });

    return store.dispatch(getReadingStatsArticles()).then(() => {
      expect(store.getActions().length).toBeDefined();
    });
  });
});
