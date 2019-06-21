/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import sweetalert from 'sweetalert';

export const ReportArticleMessages = props => {
  const { report: article } = props.reportCategory;
  if (article !== undefined && article !== null) {
    sweetalert('Thanks for your report will get back to you');
  }
  return <div />;
};

export const mapStateToprops = state => ({
  reportCategory: state.getCategory,
});

export default connect(mapStateToprops)(ReportArticleMessages);
