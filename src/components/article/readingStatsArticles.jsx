import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserArticle from '../common/userArticle';
import { getReadingStatsArticles } from '../../redux/actions/bookmarkedArticles';
import '../../styles/css/bookmarked.css';
/**
 * @params Jacques Nyilinkindi
 */
class ReadingStatsArticles extends Component {
  state = {};

  /**
   * @author Jacques Nyilinkindi
   * @returns { * } ---
   */
  componentDidMount() {
    const { getReadingStatsArticles: getArtcles, username } = this.props;
    getArtcles(username);
  }

  /**
   * @author Jacques Nyilinkindi
   * @returns { * } ---
   */
  render() {
    const { statsArticles } = this.props;
    return (
      <div>
        {true && (
          <div className="bookmarked-article">
            <h1 className="text-center">Reading Stats</h1>
            <div className="stats-list">
              <div className="stats-card">
                <div className="card-header">Read this Week</div>
                <div className="card-main">
                  {statsArticles && (
                    <div className="main-description">
                      {statsArticles.thisWeekRead}
                    </div>
                  )}
                </div>
              </div>

              <div className="stats-card">
                <div className="card-header">Read this Month</div>
                <div className="card-main">
                  {statsArticles && (
                    <div className="main-description">
                      {statsArticles.thisMonthRead}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {statsArticles &&
              statsArticles.statsArticles.map(article => (
                <UserArticle
                  articles={article.article}
                  key={article.id}
                  author={article.user}
                />
              ))}
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    statsArticles: state.readingStats.readingStats,
  };
};
export default connect(
  mapStateToProps,
  { getReadingStatsArticles },
)(ReadingStatsArticles);
