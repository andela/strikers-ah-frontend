/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import sweeetAlert from 'sweetalert';
import { connect } from 'react-redux';
import { createArticle } from '../../redux/actions/articleAction';
import alert from '../../redux/actions/alert';

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
    this.BodyContent = React.createRef();
  }

  onSubmit = () => {
    const { title, body, taglist } = this.state;
    const data = {
      title,
      body: this.BodyContent.current ? this.BodyContent.current.innerHTML : '',
      taglist,
    };
    if (data.title === '') {
      this.props.alert("title can't be empty", 'danger');
    }
    if (data.body === '') {
      this.props.alert("body can't be empty", 'danger');
    }
    this.props.createArticle(data);
    sweeetAlert('Successfully!', 'Article published', 'success');
  };

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
              <div>
                <input
                  type="text"
                  name="title"
                  onChange={this.handleChange}
                  placeholder="Title goes here"
                  id="title"
                  maxLength="80"
                />
              </div>
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
  article: state.Article,
});

export default connect(
  mapStateToprops,
  { createArticle, alert },
)(ArticleForm);
