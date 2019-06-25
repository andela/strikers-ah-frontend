/* eslint-disable import/no-named-as-default */
import React from 'react';
import 'react-quill/dist/quill.snow.css';
import '../../styles/css/article.css';
import Layout from '../common/pageLayout';
import ArticleForm from './ArticleForm';

/**
 *@author: Innocent Nkunzi
 * @param {Object} props
 * @param {Object} res
 * @returns {Object} Articleform
 */
const Body = () => {
  return (
    <React.Fragment>
      <Layout>
        <ArticleForm />
      </Layout>
    </React.Fragment>
  );
};

export default Body;
