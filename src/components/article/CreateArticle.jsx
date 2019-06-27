import React, { Fragment } from 'react';
import Body from './Body';
import Footer from '../Footer';

export const CreateArticle = () => {
  return (
    <Fragment>
      <Body />
      <Footer />
    </Fragment>
  );
};

export const NoMatch = () => {
  return <h1>404</h1>;
};
