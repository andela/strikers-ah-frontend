/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../styles/css/emoji.css';
import { checkRatings } from '../../redux/actions/rateArticle';

/**
 * Rating Component
 * @returns {*} c
 */
export class Ratings extends Component {
  /**
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);

    this.props.checkRatings(this.props.slug);
  }

  /**
   * @returns {*} render
   */
  render() {
    let ratings = '';
    const { rateArticle } = this.props;
    if (rateArticle.ratings != null) {
      ratings = `${rateArticle.ratings} Average rating`;
    }
    return (
      <div className="ratings">
        <span id="ratings-btn" className={ratings}>
          {ratings}
        </span>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  rateArticle: state.rateArticle,
});

export default connect(
  mapStateToProps,
  { checkRatings },
)(Ratings);
