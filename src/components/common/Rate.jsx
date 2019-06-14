/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from '@sweetalert/with-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-brands-svg-icons';
import '../../styles/css/emoji.css';
import { ratingArticle } from '../../redux/actions/rateArticle';

/**
 * Rating Component
 * @returns {*} c
 */
export class Rate extends Component {
  /**
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.slug = this.props.slug;
  }

  /**
   *
   * @param {*} value
   * @returns {*} action
   */
  onPick = async value => {
    await this.props.ratingArticle(value, this.slug);
    swal(
      'Thanks for your rating!',
      `${
        this.props.rateArticle.rate.error == null
          ? `You rated us with ${value} badge`
          : this.props.rateArticle.rate.error
      }`,
      this.props.rateArticle.rate.error == null ||
        this.props.rateArticle.rate.error === undefined
        ? 'success'
        : 'info',
    );
  };

  /**
   * @memberof Rating
   * @returns {*} button
   */
  MoodButton = ({ rating, onClick, value, icon }) => (
    <button
      data-rating={rating}
      className="mood-btn"
      onClick={() => onClick(rating)}
    >
      <FontAwesomeIcon className="terrible fa-2x" icon={icon} />
      <span className="emojiValue"> {value}</span>
    </button>
  );

  /**
   * @returns {*} render
   */
  render() {
    return (
      <div className="emojis">
        <this.MoodButton
          id="Terrible"
          rating="Terrible"
          onClick={this.onPick}
          value="Terrible"
          icon={faStar}
        />
        <this.MoodButton
          id="Bad"
          rating="Bad"
          onClick={this.onPick}
          value="Bad"
          icon={faStar}
        />
        <this.MoodButton
          id="Okay"
          rating="Okay"
          onClick={this.onPick}
          value="Okay"
          icon={faStar}
        />
        <this.MoodButton
          id="Good"
          rating="Good"
          onClick={this.onPick}
          value="Good"
          icon={faStar}
        />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  rateArticle: state.rateArticle,
});

export default connect(
  mapStateToProps,
  { ratingArticle },
)(Rate);
