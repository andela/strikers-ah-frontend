/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { getLoggedInUserProfile } from '../redux/actions/userAction';

class Index extends Component {
  componentWillMount() {
    const user = localStorage.getItem('token');
    const url = this.props.location.search;
    const params = queryString.parse(url);
    if (params.token != null) {
      localStorage.setItem('token', params.token);
      this.props.getLoggedInUserProfile(params.token);
    } else if (user != null) {
      this.props.getLoggedInUserProfile(user);
    }
  }

  render() {
    if (this.props.userProfile.length !== 0) {
      const { user } = this.props.userProfile;
      console.log(user);
    }
    return (
      <div>
        <p>home page component</p>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userProfile: state.userProfile,
});

export default connect(
  mapStateToProps,
  { getLoggedInUserProfile },
)(Index);
