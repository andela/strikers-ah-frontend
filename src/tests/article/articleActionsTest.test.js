import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import axios, { DEV_BASE_URL } from '../../helpers/axios';
import {
  createArticle,
  getAllArticles,
  getOneArticle,
  deleteArticle,
  updateArticle,
  getReportedArticles,
} from '../../redux/actions/articleAction';
// import * as actions from '../../redux/actionTypes/articleType';

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

  test('should dispatch create article action', async () => {
    const store = mockStore({});

    const expectedState = {
      article: {},
    };

    const data = {
      title: 'hfakjhf',
      body:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      taglist: ['fhaskfjhas', 'fjashfksahf'],
    };

    await moxios.stubRequest(`${DEV_BASE_URL}/api/articles`, {
      response: {
        status: 201,
        response: expectedState,
      },
    });

    return store.dispatch(createArticle(data)).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });
  test('should dispatch create article action', async () => {
    const store = mockStore({});

    const expectedState = {
      error: {},
      loading: false,
    };

    const data = {
      title: 'hfakjhf',
      body: 'Lorem Ipsum is simply',
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: expectedState,
      });
    });

    return store.dispatch(createArticle(data)).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });
  test('should return all article created', () => {
    const store = mockStore({});

    const expectedState = {
      allArticles: {},
      loading: false,
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });
    return store.dispatch(getAllArticles()).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });
  test('should return all article created', () => {
    const store = mockStore({});

    const expectedState = {
      allArticles: {},
      loading: false,
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });
    return store.dispatch(getAllArticles()).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });
  test('should test the `getOneArticle` created', () => {
    const store = mockStore({});

    const expectedState = {
      article: {},
      loading: false,
    };

    const slug = 'hello-there-devs-7b05622';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });
    return store.dispatch(getOneArticle(slug)).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });
  test('should test the `getOneArticle error` created', () => {
    const store = mockStore({});

    const expectedState = {
      article: {},
      loading: false,
    };

    const slug = '';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: expectedState,
      });
    });
    return store.dispatch(getOneArticle(slug)).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });
  test('should test the `deleteArticle` created', () => {
    const store = mockStore({});

    const expectedState = {
      article: {},
      message: 'Article deleted',
    };

    const slug = 'hello-there-devs-7b05622';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });
    return store.dispatch(deleteArticle(slug)).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });
  test('should test the `deleteArticle` error created', () => {
    const store = mockStore({});

    const expectedState = {
      article: {},
      message: '',
    };

    const slug = '';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: expectedState,
      });
    });
    return store.dispatch(deleteArticle(slug)).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });
  test('should test the `updateArticle`', () => {
    const store = mockStore({});

    const expectedState = {
      title: 'hello there',
      body:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    };

    const slug = 'hello-there-devs-7b05622';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });
    return store.dispatch(updateArticle(slug)).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });
  test('should test the `updateArticle` error', () => {
    const store = mockStore({});

    const expectedState = {
      error: {},
      loading: false,
    };

    const slug = 'hello-there-devs-7b05622';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: expectedState,
      });
    });
    return store.dispatch(updateArticle(slug)).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });

  test('should test if reported articles are dispatched', () => {
    const store = mockStore({});

    const expectedState = {
      data: [
        {
          id: 2,
          article: {
            title: 'Hello world',
            slug: 'Hello-World-345ert',
          },
          category: 'Copywrite',
          description: 'hey there',
        },
      ],
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });
    return store.dispatch(getReportedArticles()).then(() => {
      expect(store.getActions()[0].payload).toEqual(expectedState);
    });
  });

  test('should test if reported articles dispatches an error', () => {
    const store = mockStore({});

    const expectedState = {
      response: { data: 'we had an issue connecting to the internet' },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: expectedState,
      });
    });
    return store.dispatch(getReportedArticles()).then(() => {
      expect(store.getActions()[0].payload).toEqual({ message: expectedState });
    });
  });
});
