/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-return-assign */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import swal from '@sweetalert/with-react';
import htmlReactParser from 'html-react-parser';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBookmark } from '@fortawesome/free-solid-svg-icons';
import '../styles/css/category.css';
import defaultImage from '../styles/img/backgound-one.jpg';
import Layout from './common/pageLayout';
import { articles } from '../redux/actions/articleByCategory';
import Spinner from './article/Spinner';

/**
 * category article display
 */
export class Category extends Component {
  /**
   *
   * @param {*} props
   * @returns {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      articlePerPage: 4,
    };
    this.category = this.props.match.params.category;
    this.props.articles(this.category);
  }

  /**
   *
   *@param {*} event
   * @memberof Category
   * @returns {*} currentPage
   */
  handleClick = event => {
    this.setState({
      currentPage: Number(event.target.id),
    });
  };

  /**
   *@param {*} articlesArr
   * @memberof Category
   * @returns {*} articles
   */
  mapItems = articlesArr => {
    const elements = articlesArr;
    // eslint-disable-next-line no-restricted-globals
    const url = location.origin;
    const { currentPage, articlePerPage } = this.state;

    const indexOfLastArticle = currentPage * articlePerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlePerPage;
    const currentArticle = elements.slice(
      indexOfFirstArticle,
      indexOfLastArticle,
    );
    const article = currentArticle.map(item => (
      <div className="articleCard" key={item.id}>
        <a id="cardLink" href={`${url}/article/${item.slug}`}>
          <div className="cardTitle">
            <span className="articleTitle">{item.title} </span>
            {/* <span className="articleDescription"> */}
            {htmlReactParser(item.description)}
            <div className="likeAndBookMarkDiv">
              <FontAwesomeIcon icon={faHeart} id="views" />
              {item.views} Views
              <button type="button" className="bookmark">
                <FontAwesomeIcon icon={faBookmark} />
              </button>
            </div>
          </div>
          <img
            className="articleImage"
            src={item.image === 'null' ? defaultImage : item.image}
            alt="imageName"
          />
        </a>
      </div>
    ));
    return article;
  };

  /**
   *
   *@param {*} articleArray
   * @memberof Category
   * @returns {*} article
   */
  randomArticle = articleArray => {
    const topArticle =
      articleArray[Math.floor(Math.random() * articleArray.length)];
    return topArticle;
  };

  /**
   * @returns {*} render
   */
  render() {
    if (this.props.articleByCategory.Articles !== undefined) {
      const Articles = this.props.articleByCategory.Articles;
      if (Articles.error) {
        return (window.location.href = '/notfound');
      }
      if (Articles.length === 0) {
        return (
          swal(`Sorry! No Article found in ${this.category} category `),
          setTimeout(() => {
            return (window.location.href = '/topic/Other');
          }, 1000)
        );
      }

      const pageNumbers = [];
      for (
        let i = 1;
        i <= Math.ceil(Articles.length / this.state.articlePerPage);
        i += 1
      ) {
        pageNumbers.push(i);
      }

      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <a
            key={number}
            id={number}
            href="javascript:;"
            onClick={this.handleClick}
          >
            {number}
          </a>
        );
      });

      const randArticle = this.randomArticle(Articles);
      return (
        <Layout>
          <div className="container">
            <div className="topArticle">
              <img
                src={
                  randArticle.image === 'null'
                    ? defaultImage
                    : randArticle.image
                }
                alt="randArticletitle"
                className="topArticleImage"
              />
              <div className="titleDiv">
                <span className="title">{randArticle.title}</span>
                {/* <p className='owner'>{randArticle.description}</p> */}
                <span className="description">
                  {htmlReactParser(randArticle.description)}
                </span>
              </div>
            </div>
            {/* <div className='popular'>
                        here are the popular
                    </div> */}
            <div className="articles">
              <p className="categoryTitle">{this.category}</p>
            </div>
            <div className="cardContainer">{this.mapItems(Articles)}</div>
            <div className="center">
              <div className="pagination">{renderPageNumbers}</div>
            </div>
          </div>
        </Layout>
      );
    }

    return (
      <div>
        <Spinner />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  articleByCategory: state.articleByCategory,
});

export default connect(
  mapStateToProps,
  { articles },
)(Category);
