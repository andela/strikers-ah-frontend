/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from '@sweetalert/with-react';
import '../../styles/css/emoji.css';
import { ratingArticle } from '../../redux/actions/rateArticle';
import good from '../../styles/img/good.png';
import great from '../../styles/img/great.png';
import bad from '../../styles/img/bad.png';
import terrible from '../../styles/img/terrible.png';
import okay from '../../styles/img/okay.png';

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
      type="button"
      data-rating={rating}
      className="mood-btn"
      onClick={() => onClick(rating)}
    >
      <img className="ratingIcons" src={icon} alt={icon} />
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
          icon={terrible}
        />
        <this.MoodButton
          id="Bad"
          rating="Bad"
          onClick={this.onPick}
          value="Bad"
          icon={bad}
        />
        <this.MoodButton
          id="Okay"
          rating="Okay"
          onClick={this.onPick}
          value="Okay"
          icon={okay}
        />
        <this.MoodButton
          id="Good"
          rating="Good"
          onClick={this.onPick}
          value="Good"
          icon={good}
        />
        <this.MoodButton
          id="Great"
          rating="Great"
          onClick={this.onPick}
          value="Great"
          icon={great}
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
