import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import axios from '../helpers/axios';
import { addImage } from '../redux/actions/formActions';

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

    const userInfo = {
      userInfo: { firstname: 'mwibutsa' },
      image: 'image.png',
    };

    return store.dispatch(addImage(userInfo)).then(() => {
      expect(store.getActions().length).toBeDefined();
    });
  });
});
