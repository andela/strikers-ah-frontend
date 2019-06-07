/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import '../css/Home-styles/home-body-content-style.css';
import nature from '../img/traveling.jpg';
import { main, featured, latest } from '../redux/actions/HomeAction';

/**
 * @author Clet Mwunguzi
 *
 */
class HomeBody extends Component {
  /**
   * @author Clet Mwunguzi
   * @param {*} props
   * @returns {*} Home body content
   */

  /**
   * @author Clet Mwunguzi
   * @param {*} props
   * @returns {*} latest action
   */
  componentDidMount() {
    this.props.main();
    this.props.latest();
    this.props.featured();
  }

  /**
   * @author Clet Mwunguzi
   * @returns {*} formated date
   */

  handleDateDisplay = element => {
    const month = new Date(element.createdAt).toDateString().split(' ')[1];
    const day = new Date(element.createdAt).toDateString().split(' ')[2];
    const date = `${month} ${day}`;
    return date;
  };

  /**
   * @author Clet Mwunguzi
   * @returns {*} Home body content
   */
  render() {
    let articles;
    if (this.props.homePageReducer) {
      const { homePageReducer } = this.props;
      articles = _.take(homePageReducer, 4);
    }
    let latestArticles;
    if (this.props.latestReducer) {
      const { latestReducer } = this.props;
      latestArticles = latestReducer.data;
    }

    let featuredArticles;
    if (this.props.featuredReducer) {
      const { featuredReducer } = this.props;
      featuredArticles = featuredReducer.data;
    }
    return (
      <div className="container-1">
        <div className="other-articles">
          <div className="reading-history grid-element">
            <div className="article-header">From your Reading History</div>

            {articles &&
              articles.map(element => (
                <a
                  className="article-link"
                  key={element.id}
                  href={`article/${element.slug}`}
                >
                  <div className="article">
                    <div className="article-element">
                      <img
                        src={element.image === 'null' ? nature : element.image}
                        alt="article"
                        className="article-picture"
                      />
                    </div>
                    <div className="article-content article-element">
                      <div className="article-head">{element.title}</div>
                      <div className="article-mark">
                        <span className="author-name">
                          {element.user.username}
                        </span>
                        <span className="article-time time-style">{`| ${this.handleDateDisplay(
                          element,
                        )}`}</span>
                        <span className="read-time time-style">
                          {' '}
                          . 4 min Read
                        </span>
                      </div>
                      <div className="article-excerpt time-style">
                        {element.description}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
          </div>
          <div className="featured grid-element">
            <div className="article-header">
              <span className="side-header">Featured </span>
              <span className="side-link">SEE ALL</span>
            </div>
            <hr className="h-line" />
            {featuredArticles &&
              featuredArticles.map(element => (
                <a
                  className="article-link"
                  key={element.id}
                  href={`article/${element.slug}`}
                >
                  <div className="side-article">
                    <div className="side-article-head">{element.title}</div>
                    <div className="side-article-mark">
                      <span className="author-name side-author-name">
                        {element.username}
                      </span>
                      <span className="article-time time-style side-time-style">
                        {this.handleDateDisplay(element)}
                      </span>
                      <span className="read-time time-style side-time-style">
                        {' '}
                        . 4 min Read
                      </span>
                    </div>
                  </div>
                </a>
              ))}
          </div>
          <div className="latest grid-element">
            <div className="article-header">
              <span className="side-header">Latest</span>
              <span className="side-link">SEE ALL</span>
            </div>
            <hr className="h-line" />
            {latestArticles &&
              latestArticles.map(element => (
                <a
                  className="article-link"
                  key={element.id}
                  href={`article/${element.slug}`}
                >
                  <div className="side-article">
                    <div className="side-article-head">{element.title}</div>
                    <div className="side-article-mark">
                      <span className="author-name side-author-name">
                        {element.username}
                      </span>
                      <span className="article-time time-style side-time-style">
                        {this.handleDateDisplay(element)}
                      </span>
                      <span className="read-time time-style side-time-style">
                        {' '}
                        . 4 min Read
                      </span>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  homePageReducer: state.homePageReducer.main,
  latestReducer: state.homePageReducer.latest,
  featuredReducer: state.homePageReducer.featured,
});
export default connect(
  mapStateToProps,
  { main, featured, latest },
)(HomeBody);
