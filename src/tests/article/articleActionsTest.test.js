import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import axios from 'axios';
import createArticle from '../../redux/actions/articleAction';
import * as actions from '../../redux/actionTypes/articleType';

const midleware = [thunk];
const mockStore = configureStore(midleware);
const { BACKEND_URL } = process.env;
// const store = mockStore();
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
    const expectedAction = [
      {
        type: actions.CREATE_ARTICLE,
        payload: {
          article: [''],
        },
      },
    ];
    await moxios.stubRequest(`${BACKEND_URL}/api/articles/`, {
      status: 201,
      response: {
        article: [''],
      },
    });

    store.dispatch(createArticle()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  test('should dispatch create article error', async () => {
    const store = mockStore({});
    const expectedAction = [
      {
        type: actions.CREATE_ARTICLE_ERROR,
        payload: {
          error: 'validation error',
        },
      },
    ];
    await moxios.stubRequest(`${BACKEND_URL}/api/articles/`, {
      status: 400,
      response: {
        error: 'validation error',
      },
    });

    store.dispatch(createArticle()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
