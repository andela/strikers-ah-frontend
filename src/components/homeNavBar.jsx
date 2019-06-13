/* eslint-disable react/destructuring-assignment */
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../css/Home-styles/home-style.css';
import logo from '../styles/img/logo.png';
import notifications from '../img/icons/notifications-bell-button.svg';
import search from '../img/icons/search.svg';
import userProfile from '../img/icons/user.svg';
import { notification } from '../redux/actions/HomeAction';
/**
 * @author Clet Mwunguzi
 *
 */
export class HomeNavBar extends Component {
  state = {
    categories: [
      'HOME',
      'SPORT',
      'CULTURE',
      'ENTERTAINMENT',
      'ECONOMICS',
      'TECH',
      'HEALTH',
      'POLITICS',
      'BUSINESS',
    ],
    popup: false,
    profile: false,
    notificationMsg: '',
    allNotifications: [],
  };

  /**
   * @author Clet Mwunguzi
   * @param {*} props
   * @returns {*} latest action
   */
  componentDidMount() {
    this.props.notification();
  }

  /**
   * @author Clet Mwunguzi
   * @param {*} nextProps \
   * @returns {*} latest action
   */
  componentWillReceiveProps(nextProps) {
    const { NotificationReducer } = nextProps;
    if (NotificationReducer) {
      if (NotificationReducer.length === 0) {
        this.setState({ notificationMsg: 'No notification yet' });
      } else {
        this.setState({ allNotifications: NotificationReducer });
      }
    }
  }

  /**
   * @author Clet Mwunguzi
   * @returns {*} NavBar component
   */

  openToggle = e => {
    if (e.target.name === 'notification') {
      // eslint-disable-next-line react/destructuring-assignment
      this.setState(prevState => ({
        popup: !prevState.popup,
        userNotification: true,
        profile: false,
      }));
    }
    if (e.target.name === 'profile') {
      // eslint-disable-next-line react/destructuring-assignment
      this.setState(prevState => ({
        popup: !prevState.popup,
        userNotification: false,
        profile: true,
      }));
    }
  };

  /**
   * @author Clet Mwunguzi
   * @returns {*} NavBar component
   */
  render() {
    const {
      categories,
      popup,
      userNotification,
      profile,
      notificationMsg,
      allNotifications,
    } = this.state;
    const { user } = this.props;
    return (
      <div className="home-navigation">
        <div className="nav-bar">
          <img className="logo-style" src={logo} alt="Authors Haven logo" />
          {user ? (
            <div className="user-sm-dashboard">
              <img
                className="icons-style user-profile"
                src={userProfile}
                alt="profile"
                onClick={this.openToggle.bind(this)}
                name="profile"
                role="button"
              />
              <img
                className="icons-style"
                src={notifications}
                alt="notification"
                onClick={this.openToggle.bind(this)}
                role="button"
                name="notification"
              />
              <img className="icons-style" src={search} alt="search" />
              {popup && (
                <div className="popup-style">
                  {userNotification && (
                    <React.Fragment>
                      <div className="arrow-up-notification" />
                      <div className="notification-style">
                        {notificationMsg ||
                          allNotifications.map(element => element.message)}
                      </div>
                    </React.Fragment>
                  )}
                  {profile && (
                    <React.Fragment>
                      <div className="arrow-up-profile" />
                      <div className="profile-style">profile data</div>
                    </React.Fragment>
                  )}
                </div>
              )}
            </div>
          ) : (
            <React.Fragment>
              <Link className="home-nav-link" to="/signup">
                Register
              </Link>
              <Link className="home-nav-link" to="/login">
                Login
              </Link>
            </React.Fragment>
          )}
        </div>
        <ul className="nav-categories">
          {categories.map(x => (
            <li key={categories.indexOf(x)}>{x}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  NotificationReducer: state.homePageReducer.notification,
  ErrorReducer: state.homePageReducer.error,
});

export default connect(
  mapStateToProps,
  { notification },
)(HomeNavBar);
