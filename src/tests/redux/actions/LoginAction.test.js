/* eslint-disable no-throw-literal */

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { login, logout } from '../../../actions/login.actions';
import {
  valueChange,
  showErrors,
  valueChangeType,
} from '../../../actions/loginForm';
import {
  USER_LOGIN,
  INVALID_CREDENTIALS,
} from '../../../redux/actionTypes/userTypes';

import { userLogin } from '../../../redux/reducers/login.reducers';

const credentials = {
  email: 'test@email.com',
  password: '#$#2!@4$AQ',
};

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const data = {
  success: {
    user: {
      username: 'me',
      email: 'me@example.com',
      bio: null,
      image: null,
      token: 'some_unreadable_stuff567oduafha',
    },
  },
  failed: { error: 'Invalid username or password' },
};

const mockError = Promise.resolve({
  text: () => {
    throw 'Something went wrong!';
  },
  ok: false,
});

const mockResponse = type =>
  Promise.resolve({
    text: () => Promise.resolve(JSON.stringify(data[type])),
    ok: type === 'success',
    ...data[type],
  });

describe('login.actions.js', () => {
  test('should logout action', () => {
    logout();
    expect();
  });
  test('should dispatch login action', done => {
    jest
      .spyOn(global, 'fetch')
      .mockImplementation(() => mockResponse('success'));
    const expecations = [
      {
        type: USER_LOGIN,
        payload: data.success,
      },
    ];
    const store = mockStore({});
    return store
      .dispatch(login(credentials.email, credentials.password))
      .then(() => {
        expect(store.getActions()).toEqual(expecations);
        done();
      });
  });

  test('should dispatch invalid credentials', done => {
    jest
      .spyOn(global, 'fetch')
      .mockImplementation(() => mockResponse('failed'));
    const expecations = [
      {
        type: INVALID_CREDENTIALS,
        payload: data.failed.error,
      },
    ];
    const store = mockStore({});
    return store
      .dispatch(login(credentials.email, credentials.password))
      .then(() => {
        expect(store.getActions()).toEqual(expecations);
        done();
      });
  });

  test('should distpach server error', done => {
    jest.spyOn(global, 'fetch').mockImplementation(() => mockError);
    const expecations = [
      {
        type: INVALID_CREDENTIALS,
        payload: 'Something went wrong!',
      },
    ];
    const store = mockStore({});
    return store
      .dispatch(login(credentials.email, credentials.password))
      .then(() => {
        expect(store.getActions()).toEqual(expecations);
        done();
      });
  });

  test('should get errors', done => {
    const errors = showErrors();
    expect(errors).toEqual({});
    done();
  });

  test('should distpach input value change', done => {
    const payload = {};
    const expectations = [
      {
        type: valueChangeType,
        payload,
      },
    ];
    const store = mockStore({});
    store.dispatch(valueChange(payload));
    expect(store.getActions()).toEqual(expectations);
    done();
  });
});

describe('login.actions.js', () => {
  const initialState = {
    user: {},
    errors: {},
  };

  const action = {
    type: USER_LOGIN,
    payload: {},
  };
  test('should login user', done => {
    const loginDetails = userLogin(initialState, action);
    const expectations = {
      ...initialState,
      user: { ...initialState.user, ...action.payload },
    };
    expect(loginDetails).toEqual(expectations);
    done();
  });
  test('should invalidate credentials', done => {
    action.type = INVALID_CREDENTIALS;
    const loginDetails = userLogin(initialState, action);
    const expectations = {
      ...initialState,
      errors: action.payload,
    };
    expect(loginDetails).toEqual(expectations);
    done();
  });
});
