/* eslint-disable prefer-destructuring */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../styles/css/followBtn.css';
import {
  followUser,
  unfollowUser,
  checkProfileFollowStatus,
} from '../../redux/actions/followingAction';
/**
 * Follow button
 */
class FollowButton extends Component {
  /**
   * @author frank harerimana
   * @param {*} props
   * @returns {*} button
   */
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * @author frank harerimana
   * @param {*} event
   * @returns {*} button
   */
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token !== null) {
      this.checkStatus();
    }
  }

  /**
   * @author frank harerimana
   * @param {*} event
   * @returns {*} button
   */
  checkUsername() {
    let username = this.state.username;
    if (this.props.userProfile.user.profile != null) {
      username = this.props.userProfile.user.profile.username;
    } else if (this.props.Article.article.username != null) {
      username = this.props.Article.article.username;
    }
    return username;
  }

  /**
   * @author frank harerimana
   * @param {*} event
   * @returns {*} button
   */
  checkStatus() {
    const username = this.checkUsername();
    this.props.checkProfileFollowStatus(username);
  }

  /**
   * @author frank harerimana
   * @param {*} event
   * @returns {*} button
   */
  handleClick(event) {
    event.preventDefault();
    if (localStorage.getItem('token') != null) {
      const { status } = this.props.following[0];
      const username = this.checkUsername();
      if (status === 'follow') {
        this.props.followUser(username);
      } else {
        this.props.unfollowUser(username);
      }
    } else {
      // eslint-disable-next-line no-return-assign
      return (window.location.href = '/login');
    }
  }

  /**
   * @author frank harerimana
   * @param {*} props
   * @returns {*} button
   */
  render() {
    const { status } = this.props.following[0];
    return (
      <button
        type="button"
        id={status === 'following' ? 'following-btn' : 'follow-btn'}
        className={this.props.className}
        onClick={this.handleClick}
      >
        {status}
      </button>
    );
  }
}
const mapStateToProps = state => ({
  following: state.following,
  userProfile: state.userProfile,
  Article: state.Article,
});

export default connect(
  mapStateToProps,
  { followUser, unfollowUser, checkProfileFollowStatus },
)(FollowButton);
