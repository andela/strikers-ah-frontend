/* eslint-disable require-jsdoc */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextArea from '../common/textArea';
import SubmitButton from '../common/SubmitButton';

class CommentForm extends Component {
  state = {
    comment: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { comment } = this.state;
    const { addComment: saveComment } = this.props;
    const { match } = this.props;
    const { slug } = match.params;
    if (comment.length) {
      saveComment(comment, slug);
    }
  };

  render() {
    const { comment } = this.state;
    return (
      <div className="comment-form">
        <form onSubmit={this.handleSubmit}>
          <TextArea
            handleChange={this.handleChange}
            placeholder="Add your comment"
            name="comment"
            value={comment}
          />
          <SubmitButton type="submit" name="comment" value="Comment" />
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    comment: state.comments,
  };
};
export default connect(
  mapStateToProps,
  {},
)(CommentForm);
