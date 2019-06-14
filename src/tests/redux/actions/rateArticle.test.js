import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import '../../../enzymeConfig';
import {
  ratingArticle,
  checkRatings,
} from '../../../redux/actions/rateArticle';
import axios from '../../../helpers/axios';

const mockStore = configureStore([thunk]);
const store = mockStore();

describe('Rating the article `rateArticle.js`', () => {
  beforeEach(() => {
    moxios.install(axios);
  });
  afterEach(() => {
    moxios.uninstall(axios);
  });
  test('should ', () => {
    const expectedState = {
      response: {
        payload: {
          rate: 'Good',
        },
      },
    };
    const rate = 'good';
    const slug = 'this-sis-the-slug';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        response: expectedState,
      });
    });

    return store.dispatch(ratingArticle(rate, slug)).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });

  test('should ', () => {
    const expectedState = {
      response: {
        payload: {
          rate: 'Good',
        },
      },
    };
    const rate = 'good';
    const slug = 'this-sis-the-slug';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: expectedState,
      });
    });
    return store.dispatch(ratingArticle(rate, slug)).then(() => {
      expect(store.getActions().length).toBe(2);
    });
  });

  test('should ', () => {
    const expectedState = {
      response: {
        payload: {
          rate: 'Good',
        },
      },
    };
    const slug = 'this-sis-the-slug';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        response: expectedState,
      });
    });

    return store.dispatch(checkRatings(slug)).then(() => {
      expect(store.getActions().length).toBe(3);
    });
  });

  test('should ', () => {
    const expectedState = {
      response: {
        payload: {
          rate: 'Good',
        },
      },
    };
    const slug = 'this-sis-the-slug';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: expectedState,
      });
    });
    return store.dispatch(checkRatings(slug)).then(() => {
      expect(store.getActions().length).toBe(4);
    });
  });
});
