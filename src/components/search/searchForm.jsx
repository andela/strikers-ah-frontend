import React, { Component } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Redirect } from 'react-router';
import TextInput from '../common/textInput';
import '../../styles/css/search-form.css';
/**
 * @author Mwibutsa Floribert
 */
class SearchForm extends Component {
  state = {
    filter: 'keyword',
    keyword: '',
    redirectTo: false,
    isOnSearchPage: false,
  };

  /**
   * @author Mwibutsa Floribert
   * @returns { * } --
   */
  handleValueChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  /**
   * @author Mwibutsa Floribert
   * @returns { * } --
   */
  isSearch = () => {
    const { filter, keyword } = this.state;
    const onSearchPage = window.location.href.includes('search');
    if (!onSearchPage) {
      this.setState({
        redirectTo: `/search?${filter.toLowerCase()}=${keyword}`,
        isOnSearchPage: false,
      });
    } else {
      this.setState({ isOnSearchPage: true });
    }
  };

  /**
   * @author Mwibutsa Floribert
   * @param { * } event -- event paramteter
   * @returns { * } --
   */
  handleSubmit = event => {
    event.preventDefault();
    const { filter, keyword, isOnSearchPage } = this.state;
    if (isOnSearchPage) {
      const { search, history } = this.props;
      search({ filter: filter.toLowerCase(), keyword });
      history.push(`/search?${filter.toLowerCase()}=${keyword}`);
    }
    this.isSearch();
  };

  /**
   * @author Mwibutsa Floribert
   * @returns { * } --
   */
  render() {
    const { filter, keyword, redirectTo } = this.state;

    if (redirectTo) {
      return <Redirect to={redirectTo} />;
    }
    return (
      <div className="search-form-container">
        <form onSubmit={this.handleSubmit} className="search-form">
          <div className="search-input">
            <TextInput
              type="search"
              name="keyword"
              placeholder="Search articles"
              value={keyword}
              handleChange={this.handleValueChange}
              required="required"
            />
          </div>
          <div className="search-input">
            <select
              name="filter"
              id=""
              value={filter}
              onChange={this.handleValueChange}
            >
              <option>filter</option>
              <option>Keyword</option>
              <option>Author</option>
              <option>Tag</option>
            </select>
          </div>
          <div className="search-input">
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} size="2x" />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;
