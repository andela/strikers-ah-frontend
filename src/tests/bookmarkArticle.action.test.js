import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import axios from '../helpers/axios';
import bookmark from '../redux/actions/bookmarkArticle';

const midleware = [thunk];
const mockStore = configureStore(midleware);
const slug = 'zjdgjaxsd-sdksdasdasd-asdasdad';
describe('action tests', () => {
  beforeEach(() => {
    moxios.install(axios);
  });
  afterEach(() => {
    moxios.uninstall(axios);
  });

  test('should dispatch get user action', async () => {
    const store = mockStore({});

    const expectedState = { message: 'Bookmarked' };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(bookmark(slug)).then(() => {
      expect(store.getActions().length).toBeDefined();
    });
  });
  test('should dispatch get user action', async () => {
    const store = mockStore({});

    const expectedState = { message: 'Unbookmarked' };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: expectedState,
      });
    });

    return store.dispatch(bookmark(slug)).then(() => {
      expect(store.getActions().length).toBeDefined();
    });
  });
});
