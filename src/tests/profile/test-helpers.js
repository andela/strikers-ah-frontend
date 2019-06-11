import React from 'react';
import checkPropTypes from 'check-prop-types';
import 'jest-canvas-mock';
import { applyMiddleware, createStore } from 'redux';
import { shallow } from 'enzyme';
import { middlewares } from '../../redux/store';
import rootReducer from '../../redux/reducers/index';

export const findByTestAttribute = (component, attribute) => {
  return component.find(`[test-data='${attribute}']`);
};
export const getComponent = ComponentToRender => {
  return shallow(ComponentToRender);
};

export const checkProps = (component, expectedProps) => {
  return checkPropTypes(
    component.propTypes,
    expectedProps,
    'props',
    component.name,
  );
};

export const testStore = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore,
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};
export const getConnectedComponent = (
  Component,
  initialState = {},
  props = {},
) => {
  const store = testStore(initialState);
  const wrapper = shallow(
    <Component
      store={store}
      comments={[]}
      {...props}
      match={{ params: { username: 'Mwibutsa' } }}
    />,
  );
  return wrapper.childAt(0).dive();
};
export const getConnectedComponentNoDive = (
  Component,
  initialState = {},
  props = {},
) => {
  const store = testStore(initialState);
  const wrapper = shallow(
    <Component
      store={store}
      {...props}
      match={{ params: { username: 'Mwibutsa' } }}
    />,
  );
  return wrapper;
};
