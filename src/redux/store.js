import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const initialState = {};
export const middlewares = [thunk];
export const createStoreWithMiddleware = applyMiddleware(...middlewares)(
  createStore,
);
const store = createStoreWithMiddleware(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export default store;
