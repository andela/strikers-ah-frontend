/* eslint-disable react/jsx-filename-extension */
/* eslint-disable require-jsdoc */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import Routes from './router';
import './App.css';

/**
 * @author frank harerimana
 * @returns {*} render
 */
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter test-data="browser-router">
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}
export default App;
