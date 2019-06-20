/* eslint-disable import/no-named-as-default */
/* eslint-disable no-plusplus */
import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import UserArticle from '../common/userArticle';
import searchEngine from '../../redux/actions/searchAction';
import HomeNavBar from '../homeNavBar';
import '../../styles/css/search.css';
import Spinner from '../article/Spinner';
import Author from '../common/author';

/**
 * @author Mwibutsa Floribert
 */
class SearchResults extends Component {
  state = {};

  /**
   * @author Mwibutsa Floribert --
   *@returns { * } --
   */
  componentWillMount() {
    const { searchEngine: search, location } = this.props;
    const values = queryString.parse(location.search);
    const filter = Object.keys(values)[0];
    const keyword = values[filter];
    search({ filter, keyword });
  }

  /**
   * @author Mwibutsa Floribert
   * @returns { * } --
   */
  render() {
    let key = 1;
    const { searchResult, searchEngine: search, history } = this.props;
    const articles = searchResult
      ? searchResult.searchArticle.concat(searchResult.searchTag)
      : '';
    const { location } = this.props;
    const values = queryString.parse(location.search);
    const filter = Object.keys(values)[0];
    const keyword = values[filter];
    if (searchResult) {
      return (
        <div className="search-result">
          <HomeNavBar search={search} history={history} />
          <br /> <br />
          {articles.length > 0 && (
            <div className="search-result__articles">
              <h1 className="no-result__heading-a text-center">
                {articles.length} Result(s) for{' '}
                <strong className="search-keyword">{keyword}</strong>
              </h1>
              {articles.map(article => (
                <UserArticle articles={article} key={key++} />
              ))}
            </div>
          )}
          {searchResult.searchAuthor.length > 0 && (
            <React.Fragment key={key++}>
              <h2 className="no-result__heading-a text-center">
                {searchResult.searchAuthor.length} Authors found
              </h2>
              <div className="search-result__authors">
                {searchResult.searchAuthor.map(author => (
                  <Author {...author} key={key++} />
                ))}
              </div>
            </React.Fragment>
          )}
          {articles.length === 0 && searchResult.searchAuthor.length === 0 && (
            <div className="no-result">
              <div className="center-content">
                <h1 className="no-result__heading-a text-center">
                  No search results were found
                </h1>
                <div>
                  <h3 className="no-result__heading-b text-center">
                    But the list of
                    <a
                      href="/articles"
                      className="btn btn-link"
                      title="Click to see a list of all articles"
                    >
                      all articles &rarr;
                    </a>
                    can be helpful
                  </h3>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }
    return (
      <div>
        <Spinner />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchResult: state.searchResult.result,
    searchError: state.searchResult.error,
  };
};
export default connect(
  mapStateToProps,
  { searchEngine },
)(SearchResults);
