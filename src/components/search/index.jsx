import React, { Component } from 'react';
import UserArticle from '../common/userArticle';

/**
 * @author Mwibutsa Floribert
 */
class SearchResults extends Component {
  state = {};

  /**
   * @author Mwibutsa Floribert
   * @returns { * } --
   */
  componentWillMount() {}

  /**
   * @author Mwibutsa Floribert
   * @returns { * } --
   */
  render() {
    return (
      <div className="search-result">
        <UserArticle articles={[]} />
      </div>
    );
  }
}

export default SearchResults;
