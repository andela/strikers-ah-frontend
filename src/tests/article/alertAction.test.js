import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import axios from 'axios';
// import axios from '../../helpers/axios';
import setAlert from '../../redux/actions/alert';

const midleware = [thunk];
const mockStore = configureStore(midleware);

jest.useFakeTimers();
describe('action tests', () => {
  beforeEach(() => {
    moxios.install(axios);
  });
  afterEach(() => {
    moxios.uninstall(axios);
  });
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('should test setAlert action', () => {
    const store = mockStore({});
    const expectedState = {
      payload: {},
    };
    const data = {
      id: '80865582-8835-11e9-bc42-526af7764f64',
      msg: 'title can not be empty',
      alertType: 'Dager',
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        response: expectedState,
      });
    });
    return store.dispatch(setAlert(data)).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });
});
