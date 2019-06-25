/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { connect } from 'react-redux';
import sweetalert from 'sweetalert';

export const MessageDisplay = props => {
  const {
    article: { error, article },
  } = props;
  let size;
  if (error !== undefined) {
    size = Object.keys(error).length;
    if (size !== 0) {
      sweetalert('error', error);
    }
  }
  if (article !== undefined) {
    size = Object.keys(article).length;
    if (article !== 0) {
      sweetalert('Successfully!', 'Article published', 'success');
    }
  }

  return <div />;
};

export const mapStateToprops = state => ({
  article: state.Article,
});

export default connect(mapStateToprops)(MessageDisplay);
