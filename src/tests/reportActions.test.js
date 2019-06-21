import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import axios from '../helpers/axios';
import { createReport } from '../redux/actions/ReportArticle';

const midleware = [thunk];
const mockStore = configureStore(midleware);
describe('action tests', () => {
  beforeEach(() => {
    moxios.install(axios);
  });
  afterEach(() => {
    moxios.uninstall(axios);
  });
  test('should dispatch create article action', async () => {
    const store = mockStore({});

    const expectedState = {
      report: {
        category: 'hfakjhf',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      },
    };
    const slug = 'my-learning-journey-e579bfe';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: expectedState,
      });
    });

    return store.dispatch(createReport(slug)).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });
  test('should dispatch create article action', async () => {
    const store = mockStore({});

    const expectedState = {
      report: {
        category: 'hfakjhf',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      },
    };
    const slug = 'my-learning-journey-e579bfe';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: expectedState,
      });
    });

    return store.dispatch(createReport(slug)).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });
});
