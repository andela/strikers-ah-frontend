import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import sweetalert from 'sweetalert';

const UpdateMessageDisplay = props => {
  const { articleUpdate } = props;

  if (articleUpdate.message !== undefined) {
    sweetalert('Successfully!', 'Article updated', 'success');
  } else if (articleUpdate.error !== undefined) {
    sweetalert('error', articleUpdate.error);
    return <Redirect to="/articles" />;
  }

  return <div />;
};

const mapStateToprops = state => ({
  articleUpdate: { ...state.Article.article },
});

export default connect(mapStateToprops)(UpdateMessageDisplay);
