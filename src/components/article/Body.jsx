/* eslint-disable import/no-named-as-default */
import React from 'react';
import '../../styles/css/article.css';
import Header from './Header';
import ArticleForm from './ArticleForm';
import EditorBar from './EditorBar';

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
      <EditorBar />
      <ArticleForm />
    </React.Fragment>
  );
};

export default Body;
