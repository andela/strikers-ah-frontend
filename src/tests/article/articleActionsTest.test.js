import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import axios from '../../helpers/axios';
import {
  createArticle,
  getAllArticles,
  getOneArticle,
  // deleteArticle,
  // updateArticle,
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
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: expectedState,
      });
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
});
