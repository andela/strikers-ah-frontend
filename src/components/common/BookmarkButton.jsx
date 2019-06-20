/* eslint-disable prefer-destructuring */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../../styles/css/followBtn.css';
import bookmark from '../../redux/actions/bookmarkArticle';

/**
 * Follow button
 */
export class BookmarkButton extends Component {
  /**
   * @author Jacques Nyilinkindi
   * @param {*} props
   * @returns {*} button
   */
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * @author Jacques Nyilinkindi
   * @param {*} slug
   * @returns {*} button
   */
  handleClick() {
    const { bookmark: bookmarkArticle, article } = this.props;
    const { slug } = article;
    bookmarkArticle(slug);
  }

  /**
   * @author Jacques Nyilinkindi
   * @param {*} props
   * @returns {*} button
   */
  render() {
    const activeBtn = this.props.article.bookmark ? 'active' : '';
    return (
      <button
        type="button"
        test-data="bookmarkIcon"
        className="bookmarkIcon"
        onClick={this.handleClick}
      >
        <FontAwesomeIcon className={activeBtn} icon={faStar} />
      </button>
    );
  }
}
export const mapStateToProps = state => ({
  Article: state.Article,
});
export default connect(
  mapStateToProps,
  { bookmark },
)(BookmarkButton);
