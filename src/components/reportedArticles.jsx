import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getReportedArticles } from '../redux/actions/articleAction';
import Layout from './common/pageLayout';
import '../styles/css/reportedArticles.css';
import nature from '../img/traveling.jpg';

/**
 * @author Clet Mwunguzi
 *
 */
class ReportedArticles extends Component {
  /**
   * @author Clet Mwunguzi
   * @param {*} props
   * @returns {*} all reported articles
   */
  componentWillMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getReportedArticles();
  }

  /**
   * @author Clet Mwunguzi
   * @returns {*} reported articles component
   */
  render() {
    const { reportedArticles } = this.props;
    return (
      <Layout>
        <h1 className="report-header">Reported Articles</h1>
        <hr className="report-line" />
        <div className="reported-layout">
          {reportedArticles &&
            reportedArticles.report.map(element => (
              <div className="reported-article" key={element.id}>
                <img
                  src={
                    element.article.image === 'null'
                      ? nature
                      : element.article.image
                  }
                  className="report-img"
                  alt="article-pic"
                />
                <Link
                  to={`/article/${element.article.slug}`}
                  className="article-link"
                >
                  <div className="report-title">{element.article.title}</div>
                  <div className="report-issue">{element.category}</div>
                  <div className="report-description">
                    {element.description}
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  reportedArticles: state.Article.report,
});
export default connect(
  mapStateToProps,
  { getReportedArticles },
)(ReportedArticles);
