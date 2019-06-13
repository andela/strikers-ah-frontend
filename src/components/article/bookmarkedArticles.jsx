import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserArticle from '../common/userArticle';
import { getBookmarkedArticles } from '../../redux/actions/bookmarkedArticles';
import '../../styles/css/bookmarked.css';
/**
 * @params Mwibutsa Floribert
 */
class BookmarkedArticles extends Component {
  state = {};

  /**
   * @author Mwibutsa Floribert
   * @returns { * } ---
   */
  componentDidMount() {
    const { getBookmarkedArticles: getArtcles } = this.props;
    getArtcles();
  }

  /**
   * @author Mwibutsa Floribert
   * @param { * } bookmarkedArticles --
   * @returns { * } --
   */
  hasBookmarkedArticles = bookmarkedArticles => {
    return !!bookmarkedArticles.bookmarkedArticles;
  };

  /**
   * @author Mwibutsa Floribert
   * @returns { * } ---
   */
  render() {
    const { bookmarkedArticles } = this.props;
    const hasBookmarks = this.hasBookmarkedArticles(bookmarkedArticles);
    return (
      <div>
        {hasBookmarks && (
          <div className="bookmarked-article">
            <h1 className="text-center">Bookmarked articles</h1>

            {bookmarkedArticles &&
              bookmarkedArticles.bookmarkedArticles.map(article => (
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
    bookmarkedArticles: { ...state.bookmarkedArticles },
  };
};
export default connect(
  mapStateToProps,
  { getBookmarkedArticles },
)(BookmarkedArticles);
