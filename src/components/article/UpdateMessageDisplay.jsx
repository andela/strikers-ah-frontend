import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import sweetalert from 'sweetalert';

export const UpdateMessageDisplay = props => {
  const { articleUpdate } = props;

  if (articleUpdate.message !== undefined) {
    sweetalert('Successfully!', 'Article updated', 'success');
    return <Redirect to="/articles" />;
  }
  if (articleUpdate.error !== undefined) {
    sweetalert('error', articleUpdate.error);
  }

  return <div />;
};

export const mapStateToprops = state => ({
  articleUpdate: { ...state.Article.article },
});

export default connect(mapStateToprops)(UpdateMessageDisplay);
