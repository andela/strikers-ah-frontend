/* eslint-disable react/destructuring-assignment */
import reactHtml from 'html-react-parser';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import '../../styles/css/article.css';
import { getOneArticle } from '../../redux/actions/articleAction';
import Author from './Author';
import SocialMedia from './SocialMedia';

/**
 *@author: Innocent Nkunzi
 * @returns {*} Articleform
 */
export class ReadArticle extends Component {
  /**
   * @author Innocent Nkunzi
   * @returns {*} componentDidmount
   */
  componentWillMount() {
    const { slug } = this.props.match.params;
    this.props.getOneArticle(slug);
  }

  /**
   * @author Innocent Nkunzi
   * @returns {*} component
   */
  render() {
    const singleArticle = this.props.article.article;
    if (singleArticle !== null && singleArticle !== undefined) {
      return (
        <Fragment>
          <Header />
          <div className="container">
            <div className="contents">
              <div className="contentTitle">
                {/* {article.title && <p>{reactHtmlparser(article.title)}</p>} */}
                <h1>{reactHtml(singleArticle.title)}</h1>
                <Author />
                <SocialMedia />
              </div>
              <div className="contentBody">
                <p>{reactHtml(singleArticle.body)}</p>
                <p id="styleImage">
                  <img src={singleArticle.image} alt="Article" />
                </p>
              </div>
            </div>
          </div>
        </Fragment>
      );
    }
    return (
      <div>
        <p>Single article</p>
      </div>
    );
  }
}
const mapStateToprops = state => ({
  article: state.Article,
});

export default connect(
  mapStateToprops,
  { getOneArticle },
)(ReadArticle);
