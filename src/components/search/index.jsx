/* eslint-disable import/no-named-as-default */
/* eslint-disable no-plusplus */
import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import UserArticle from '../common/userArticle';
import searchEngine from '../../redux/actions/searchAction';
import HomeNavBar from '../homeNavBar';
import '../../styles/css/search.css';

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
    if (searchResult) {
      return (
        <div className="search-result">
          <HomeNavBar search={search} history={history} />
          <br /> <br />
          {!searchResult && (
            <div className="atom-spinner">
              <div className="spinner-inner">
                <div className="spinner-line" />
                <div className="spinner-line" />
                <div className="spinner-line" />

                <div className="spinner-circle">&#9679;</div>
              </div>
            </div>
          )}
          {searchResult.searchArticle.length > 0 &&
            searchResult.searchArticle.map(article => (
              <UserArticle articles={article} key={key++} />
            ))}
          {searchResult.searchArticle.length === 0 && (
            <div className="no-result">
              <div className="center-content">
                <h1 className="text-center">
                  No Results were found for your search
                </h1>
                <div>
                  <h3 className="text-center">
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
        <div className="atom-spinner">
          <div className="spinner-inner">
            <div className="spinner-line" />
            <div className="spinner-line" />
            <div className="spinner-line" />

            <div className="spinner-circle">&#9679;</div>
          </div>
        </div>
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
