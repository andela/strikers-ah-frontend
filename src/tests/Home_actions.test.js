import storeConfig from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import axios from '../helpers/axios';
import { latest, featured, main } from '../redux/actions/HomeAction';

const middleware = [thunk];
const mockStore = storeConfig(middleware);

describe('Test Homepage Actions', () => {
  beforeEach(() => {
    moxios.install(axios);
  });
  afterEach(() => {
    moxios.uninstall(axios);
  });

  it('Should test FETCH_HOME_ARTICLES', () => {
    const store = mockStore({});
    const newState = {
      article: { id: 3, body: 'Loren ipsum lorehjd', title: 'ipsun jikli jgj' },
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: newState,
      });
    });

    return store.dispatch(main()).then(() => {
      expect(store.getActions()[0].payload).toEqual(newState.article);
    });
  });

  it('Should test that FETCH_HOME_ARTICLES return an error on bad request to the server', () => {
    const store = mockStore({});
    const error = {
      error:
        'There was an error connecting to the server. Check your internet and try again',
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: error,
      });
    });

    return store.dispatch(main()).then(() => {
      expect(store.getActions()[0].payload).toEqual(error);
    });
  });

  it('Should test if FETCH_FEATURED_ARTICLES  is dispatched after dispatching FETCH_ARTICLES_REQUESTED action', () => {
    const store = mockStore({});
    const newState = {
      article: { id: 3, body: 'Loren ipsum lorehjd', title: 'ipsun jikli jgj' },
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: newState,
      });
    });

    return store.dispatch(featured()).then(() => {
      expect(store.getActions()[0].type).toEqual('FETCH_ARTICLES_REQUESTED');
      expect(store.getActions()[1].payload).toEqual(newState);
    });
  });

  it('Should test if featured action will dispatch an error when request is not perfomed', () => {
    const store = mockStore({});
    const error = {
      error:
        'There was an error connecting to the server. Check your internet and try again',
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: error,
      });
    });

    return store.dispatch(featured()).then(() => {
      expect(store.getActions()[1].payload).toEqual(error);
    });
  });

  it('Should test if FETCH_LATEST_ARTICLES  is dispatched after dispatching FETCH_ARTICLES_REQUESTED action', () => {
    const store = mockStore({});
    const newState = {
      article: { id: 3, body: 'Loren ipsum lorehjd', title: 'ipsun jikli jgj' },
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: newState,
      });
    });

    return store.dispatch(latest()).then(() => {
      expect(store.getActions()[0].type).toEqual('FETCH_ARTICLES_REQUESTED');
      expect(store.getActions()[1].payload).toEqual(newState);
    });
  });

  it('Should test if featured action will dispatch an error when request is not perfomed', () => {
    const store = mockStore({});
    const error = {
      error:
        'There was an error connecting to the server. Check your internet and try again',
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: error,
      });
    });

    return store.dispatch(latest()).then(() => {
      expect(store.getActions()[1].payload).toEqual(error);
    });
  });
});
