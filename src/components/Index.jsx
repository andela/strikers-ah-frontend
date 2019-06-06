/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import getSocialUser from '../redux/actions/socialLogin';
import HomeNavBar from './homeNavBar';
import SlideShow from './common/slideshow';
import HomeBody from './homeBody';

/**
 * @author frank harerimana
 */
class Index extends Component {
  /**
   * @author frank
   * @returns {*} state
   */
  componentWillMount() {
    const user = localStorage.getItem('token');
    const url = this.props.location.search;
    const params = queryString.parse(url);
    if (params.token != null) {
      localStorage.setItem('token', params.token);
      this.props.getSocialUser(params.token);
    } else if (user != null) {
      this.props.getSocialUser(user);
    }
  }

  /**
   * @author frank harerimana
   * @returns {*} render
   */
  render() {
    let username = '';
    if (this.props.socialLoginUser.length !== 0) {
      // eslint-disable-next-line no-unused-vars
      // eslint-disable-next-line prefer-destructuring
      username = this.props.socialLoginUser.LoggedInUser.username;
    }
    return (
      <React.Fragment>
        <HomeNavBar user={username} />
        <SlideShow />
        <HomeBody />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  socialLoginUser: state.socialLoginUser,
});

export default connect(
  mapStateToProps,
  { getSocialUser },
)(Index);
