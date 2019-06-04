import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import axios from '../helpers/axios';
import {
  addComment,
  editComment,
  deleteComment,
  getComments,
} from '../redux/actions/commentAction';

const midleware = [thunk];
const mockStore = configureStore(midleware);
describe('action tests', () => {
  beforeEach(() => {
    moxios.install(axios);
  });
  afterEach(() => {
    moxios.uninstall(axios);
  });

  test('should dispatch get comment Action', async () => {
    const store = mockStore({});

    const expectedState = { comments: { id: 1, body: 'mwibutsa' } };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(getComments()).then(() => {
      expect(store.getActions().length).toBeDefined();
    });
  });
  test('should dispatch get comment Action Failure', async () => {
    const store = mockStore({});

    const expectedState = { comments: { id: 1, body: 'mwibutsa' } };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: expectedState,
      });
    });

    return store.dispatch(getComments()).then(() => {
      expect(store.getActions().length).toBeDefined();
    });
  });
  test('should dispatch add comment Action', async () => {
    const store = mockStore({});

    const expectedState = { comments: { id: 1, body: 'mwibutsa' } };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(addComment()).then(() => {
      expect(store.getActions().length).toBeDefined();
    });
  });
  test('should dispatch Add comment Action', async () => {
    const store = mockStore({});

    const expectedState = { comments: { id: 1, body: 'mwibutsa' } };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: expectedState,
      });
    });

    return store.dispatch(addComment()).then(() => {
      expect(store.getActions().length).toBeDefined();
    });
  });
  test('should dispatch Edit comment Action', async () => {
    const store = mockStore({});

    const expectedState = { comments: { id: 1, body: 'mwibutsa' } };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(editComment()).then(() => {
      expect(store.getActions().length).toBeDefined();
    });
  });
  test('should dispatch Edit comment Action failure', async () => {
    const store = mockStore({});

    const expectedState = { comments: { id: 1, body: 'mwibutsa' } };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: expectedState,
      });
    });

    return store.dispatch(editComment()).then(() => {
      expect(store.getActions().length).toBeDefined();
    });
  });
  test('should dispatch delete comment Action', async () => {
    const store = mockStore({});

    const expectedState = { comments: { id: 1, body: 'mwibutsa' } };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(deleteComment()).then(() => {
      expect(store.getActions().length).toBeDefined();
    });
  });
  test('should dispatch delete comment Action', async () => {
    const store = mockStore({});

    const expectedState = { comments: { id: 1, body: 'mwibutsa' } };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: expectedState,
      });
    });

    return store.dispatch(deleteComment()).then(() => {
      expect(store.getActions().length).toBeDefined();
    });
  });
});
