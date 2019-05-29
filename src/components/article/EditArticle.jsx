/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react';
import sweeetAlert from 'sweetalert';
import reactHtmlparser from 'html-react-parser';
import { connect } from 'react-redux';
import {
  getOneArticle,
  updateArticle,
} from '../../redux/actions/articleAction';
import alert from '../../redux/actions/alert';
import Header from './Header';
import EditorBar from './EditorBar';

/**
 *@author: Innocent Nkunzi
 * @returns {*} Articleform
 */
export class EditArticle extends Component {
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

  /**
   * @author Innocent Nkunzi
   * @returns {*} componentDidmount
   */
  componentWillMount() {
    // const match = this.props.match.params.slug;
    // this.props.getOneArticle(match);
    const {
      match: { params },
    } = this.props;
    this.props.getOneArticle(params.slug);
  }

  /**
   * @author Innocent Nkunzi
   * @param {*} slug
   * @returns {*} data
   */
  onSubmit = slug => {
    const { title, body, taglist } = this.state;
    const data = {
      title: this.TitleContent.current
        ? this.TitleContent.current.innerHTML
        : '',
      body: this.BodyContent.current ? this.BodyContent.current.innerHTML : '',
      taglist,
    };
    if (data.title === '') {
      return this.props.alert("title can't be empty", 'danger');
    }
    if (data.body === '') {
      return this.props.alert("body can't be empty", 'danger');
    }
    this.props.updateArticle(data, slug);
    sweeetAlert('Article updated', 'success');
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  /**
   * @author Innocent Nkunzi
   * @returns {*} render
   */
  render() {
    const { article } = this.props;
    return (
      <Fragment>
        <Header />
        <EditorBar />
        <div className="content">
          <section className="text-area">
            {article === undefined ||
              (article === null && <p>{article.error}</p>)}
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
                >
                  {article.title && <p>{reactHtmlparser(article.title)}</p>}
                </div>
                <div
                  contentEditable
                  id="body"
                  placeholder="body goes here..."
                  name="body"
                  onChange={this.handleChange}
                  data-text="Body goes here"
                  ref={this.BodyContent}
                >
                  {article.body && <p>{reactHtmlparser(article.body)}</p>}
                </div>
                <button
                  type="button"
                  onClick={() => this.onSubmit(article.slug)}
                  id="publish"
                >
                  Update
                </button>
              </form>
            </div>
          </section>
        </div>
      </Fragment>
    );
  }
}
const mapStateToprops = state => ({
  article: { ...state.Article.article },
});

export default connect(
  mapStateToprops,
  { alert, getOneArticle, updateArticle },
)(EditArticle);
