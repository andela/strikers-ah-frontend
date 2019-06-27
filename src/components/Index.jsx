/* eslint-disable import/no-named-as-default */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import SlideShow from './common/slideshow';
import HomeBody from './homeBody';
import Layout from './common/pageLayout';
import Footer from './Footer';

const Index = () => {
  return (
    <Layout>
      <SlideShow />
      <HomeBody />
      <Footer />
    </Layout>
  );
};

export default Index;
