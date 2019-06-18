/* eslint-disable import/no-named-as-default */
import React from 'react';
import 'react-quill/dist/quill.snow.css';
import '../../styles/css/article.css';
import Header from './Header';
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
      <Header />
      <ArticleForm />
    </React.Fragment>
  );
};

export default Body;
