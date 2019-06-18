/* eslint-disable no-plusplus */
import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import UserArticle from '../common/userArticle';
import searchEngine from '../../redux/actions/searchAction';
import SearchForm from './searchForm';
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
          <SearchForm search={search} history={history} />
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
          {searchResult &&
            searchResult.searchArticle.map(article => (
              <UserArticle articles={article} key={key++} />
            ))}
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
