/* eslint-disable import/no-named-as-default */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import SlideShow from './common/slideshow';
import HomeBody from './homeBody';
import Layout from './common/pageLayout';

const Index = () => {
  return (
    <Layout>
      <SlideShow />
      <HomeBody />
    </Layout>
  );
};

export default Index;
