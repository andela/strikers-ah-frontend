/* eslint-disable react/destructuring-assignment */
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { getLoggedInUser } from '../helpers/authentication';
import '../css/Home-styles/home-style.css';
import logo from '../styles/img/logo.png';
import notifications from '../img/icons/notifications-bell-button.svg';
import notificationIcon from '../img/icons/notification.png';
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
      { name: 'HOME', reference: '/' },
      { name: 'SPORT', reference: '#' },
      { name: 'CULTURE', reference: '#' },
      { name: 'ENTERTAINMENT', reference: '#' },
      { name: 'ECONOMICS', reference: '#' },
      { name: 'TECH', reference: '#' },
      { name: 'HEALTH', reference: '#' },
      { name: 'POLITICS', reference: '#' },
      { name: 'BUSINESS', reference: '#' },
    ],
    popup: false,
    profile: false,
    notificationMsg: (
      <div className="when-no-notification">No notification yet</div>
    ),
    allNotifications: [],
    isNotified: false,
  };

  /**
   * @author Clet Mwunguzi
   * @param {*} props
   * @returns {*} username if logged in.
   */
  componentWillMount() {
    document.addEventListener('mouseDown', this.openToggle, false);
    const url = window.location.search;
    const params = queryString.parse(url);
    if (params.token != null) {
      window.location.replace('/');
      localStorage.setItem('token', params.token);
    }
  }

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
   * @param {*} nextProps
   * @returns {*} latest action
   */
  componentWillReceiveProps(nextProps) {
    const { NotificationReducer } = nextProps;
    if (NotificationReducer) {
      if (NotificationReducer.length === 0) {
        this.setState({
          notificationMsg: (
            <div className="when-no-notification">No notification yet</div>
          ),
        });
      } else {
        this.setState({
          allNotifications: NotificationReducer,
          isNotified: true,
        });
      }
    }
  }

  // /**
  //  * @author Clet Mwunguzi
  //  * @param {*} props
  //  * @returns {*} latest action
  //  */
  // componentWillUnmount() {
  //   document.removeEventListener('mouseDown', this.openToggle, false);
  // }

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

    // }
    // else{
    //   console.log('missed');
    //   this.handleClickedOutside()
    // }
  };

  // /**
  //  * @author Clet Mwunguzi
  //  * @param {*} nextProps \
  //  * @returns {*} latest action
  //  */
  // handleClickedOutside = () =>{
  //   this.setState({userNotification: false, profile: false });
  // }

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
      isNotified,
    } = this.state;
    const { username } = getLoggedInUser();
    return (
      <div className="home-navigation">
        <div className="nav-bar">
          <Link to="/">
            <img className="logo-style" src={logo} alt="Authors Haven logo" />
          </Link>
          {username ? (
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
                className="icons-style notification-icon"
                src={notifications}
                alt="notification"
                onClick={this.openToggle.bind(this)}
                role="button"
                name="notification"
              />
              <img className="icons-style" src={search} alt="search" />
              {isNotified && <div className="notified"> </div>}
              {popup && (
                <div className="popup-style">
                  {userNotification && (
                    <React.Fragment>
                      <div className="arrow-up-notification-back" />
                      <div className="arrow-up-notification" />
                      <div className="notification-style">
                        {allNotifications.length === 0
                          ? notificationMsg
                          : _.take(allNotifications, 5).map(element => (
                              <React.Fragment key={element.id}>
                                <div className="notifications">
                                  <img
                                    className="notification-icon"
                                    src={notificationIcon}
                                    alt="new notification"
                                  />
                                  <Link
                                    className="notification-article-link"
                                    to={_.takeRight(
                                      element.link.split('/'),
                                      2,
                                    ).join('/')}
                                  >
                                    <span>{element.message}</span>
                                  </Link>
                                </div>
                                <hr className="notification-horizontal-line" />
                              </React.Fragment>
                            ))}
                        {allNotifications.length === 0 ? (
                          ' '
                        ) : (
                          <div className="seeAll-style">
                            <Link to="/notifications" className="seeAll-link">
                              SEE ALL
                            </Link>
                          </div>
                        )}
                      </div>
                    </React.Fragment>
                  )}
                  {profile && (
                    <React.Fragment>
                      <div className="arrow-up-profile-back" />
                      <div className="arrow-up-profile" />
                      <Link
                        className="profile-style user-menu"
                        to={`/${username}`}
                      >
                        Profile
                      </Link>
                      <Link
                        className="profile-style user-menu"
                        to="/article/create"
                      >
                        Create Article
                      </Link>
                      <Link className="profile-style user-menu" to="/logout">
                        Logout
                      </Link>
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
            <Link to={x.reference} key={categories.indexOf(x)}>
              <li>{x.name}</li>
            </Link>
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
