import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import axios from '../../../helpers/axios';

import likeComment from '../../../redux/actions/commentLike';

const middleware = [thunk];
const mockstore = configureStore(middleware);

describe('should test the like comment actions', () => {
  beforeEach(() => {
    moxios.install(axios);
  });
  afterEach(() => {
    moxios.uninstall(axios);
  });
  test('should test `likeComment`', () => {
    const store = mockstore({});

    const expectedState = {
      like: {},
    };

    const data = {
      slug: 'fashfkaj-89qw8',
      id: '27',
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        response: expectedState,
      });
    });
    return store.dispatch(likeComment(data)).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });
  test('should not like a comment test `likeComment`', () => {
    const store = mockstore({});

    const expectedState = {
      error: {},
    };

    const data = {};
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: expectedState,
      });
    });
    return store.dispatch(likeComment(data)).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });
});
