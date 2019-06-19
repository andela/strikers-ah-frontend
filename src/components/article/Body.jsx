/* eslint-disable import/no-named-as-default */
import React from 'react';
import 'react-quill/dist/quill.snow.css';
import '../../styles/css/article.css';
import ArticleForm from './ArticleForm';
import Layout from '../common/pageLayout';

/**
 *@author: Innocent Nkunzi
 * @param {Object} props
 * @param {Object} res
 * @returns {Object} Articleform
 */
const Body = () => {
  return (
    <Layout>
      <ArticleForm />
    </Layout>
  );
};

export default Body;
