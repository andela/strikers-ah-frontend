import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/login" render={() => <h1>login</h1>} />
    </div>
  </BrowserRouter>,
  document.getElementById('root'),
);
