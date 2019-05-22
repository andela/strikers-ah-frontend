/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import createArticle from '../../redux/actions/articleAction';
/**
 *@author: Innocent Nkunzi
 * @returns {*} Articleform
 */
export class ArticleForm extends Component {
  /**
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      taglist: [],
    };
    this.TitleContent = React.createRef();
    this.BodyContent = React.createRef();
  }

  onSubmit = () => {
    const { title, body, taglist } = this.state;
    const data = {
      title: this.TitleContent.current
        ? this.TitleContent.current.innerHTML
        : '',
      body: this.BodyContent.current ? this.BodyContent.current.innerHTML : '',
      taglist,
    };
    this.props.createArticle(data);
  };

  // handleChange = event => {
  //   const { name, value } = event.taget;
  //   this.setState({ [name]: value });
  // };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  /**
   * @author Innocent Nkunzi
   * @returns {*} render
   */
  render() {
    return (
      <div className="content">
        {/* {this.props.error && <div>Error Message</div>} */}
        <section className="text-area">
          <div className="container">
            <form className="form">
              <div
                contentEditable
                id="title"
                placeholder="Title goes here..."
                name="title"
                onChange={this.handleChange}
                data-text="Title goes here"
                ref={this.TitleContent}
              />
              <div
                contentEditable
                id="body"
                placeholder="body goes here..."
                name="body"
                onChange={this.handleChange}
                data-text="Body goes here"
                ref={this.BodyContent}
              />
              <button
                type="button"
                onClick={() => this.onSubmit()}
                id="publish"
              >
                Publish
              </button>
            </form>
          </div>
        </section>
      </div>
    );
  }
}
const mapStateToprops = state => ({
  createArticle: state.createArticle.posts,
});

export default connect(
  mapStateToprops,
  { createArticle },
)(ArticleForm);
