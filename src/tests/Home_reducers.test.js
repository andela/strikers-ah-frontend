import {
  FETCH_HOME_ARTICLES,
  FETCH_FEATURED_ARTICLES,
  FETCH_LATEST_ARTICLES,
  FETCH_ARTICLES_REQUESTED,
  ARTICLE_ERROR,
} from '../redux/actionTypes/homeTypes';

import { homePageReducer } from '../redux/reducers/homeReducer';

const payload = [
  {
    title: 'lorem',
    author: 'John Doe',
    body: 'loren ipsum hfjikilon molij hguth',
  },
  {
    title: 'ipsum',
    author: 'joan',
    body: 'kored huit kioj wert',
  },
];
describe('Test home reducers', () => {
  it('Should return default state', () => {
    const initialState = homePageReducer(undefined, {});
    expect(initialState).toEqual({});
  });

  it('Should return new state when passed with FETCH_HOME_ARTICLES', () => {
    const returnedState = homePageReducer(undefined, {
      type: FETCH_HOME_ARTICLES,
      payload,
    });
    expect(returnedState).toEqual({ main: payload });
  });

  it('Should return new state when passed with FETCH_FEATURED_ARTICLES', () => {
    const returnedState = homePageReducer(undefined, {
      type: FETCH_FEATURED_ARTICLES,
      payload,
    });
    expect(returnedState).toEqual({ featured: payload });
  });

  it('Should return new state when passed with FETCH_LATEST_ARTICLES', () => {
    const returnedState = homePageReducer(undefined, {
      type: FETCH_LATEST_ARTICLES,
      payload,
    });
    expect(returnedState).toEqual({ latest: payload });
  });

  it('Should return new state when passed with FETCH_ARTICLES_REQUESTED', () => {
    const returnedState = homePageReducer(undefined, {
      type: FETCH_ARTICLES_REQUESTED,
      payload: '',
    });
    expect(returnedState).toEqual({
      message: {
        status: 200,
        message: 'Waiting...',
      },
    });
  });

  it('Should return new state when passed with ARTICLE_ERROR', () => {
    const returnedState = homePageReducer(undefined, {
      type: ARTICLE_ERROR,
      payload,
    });
    expect(returnedState).toEqual({ error: payload });
  });
});
