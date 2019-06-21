import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import axios, { DEV_BASE_URL } from '../helpers/axios';
import getArticleCategory from '../redux/actions/articleCategory';

const midleware = [thunk];
const mockStore = configureStore(midleware);
describe('action tests', () => {
  //   beforeEach(() => {
  //     store.clearActions();
  //   });
  beforeEach(() => {
    moxios.install(axios);
  });
  afterEach(() => {
    moxios.uninstall(axios);
  });

  test('should dispatch getAllcategory action', async () => {
    const store = mockStore({});

    const expectedState = {
      reportCategory: [],
    };

    await moxios.stubRequest(`${DEV_BASE_URL}/api/category`, {
      response: {
        status: 200,
        response: expectedState,
      },
    });
    return store.dispatch(getArticleCategory()).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });
  test('should test the `getOneArticle` created', () => {
    const store = mockStore({});

    const expectedState = {
      reportCategory: [],
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: expectedState,
      });
    });
    return store.dispatch(getArticleCategory()).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });
});
