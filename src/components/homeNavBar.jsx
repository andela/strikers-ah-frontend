/* eslint-disable no-unused-expressions */
/* eslint-disable no-useless-return */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import OutsideClickHandler from 'react-outside-click-handler';
import Moment from 'react-moment';
import { getLoggedInUser } from '../helpers/authentication';
import '../css/Home-styles/home-style.css';
import logo from '../styles/img/logo.png';
import axios from '../helpers/axios';
import notifications from '../img/icons/notifications-bell-button.svg';
import notificationIcon from '../img/icons/notification.png';
import userProfile from '../img/icons/user.svg';
import { notification } from '../redux/actions/HomeAction';
import SearchForm from './search/searchForm';

/**
 * @author Clet Mwunguzi
 *
 */
export class HomeNavBar extends Component {
  state = {
    categories: [
      { name: 'HOME', reference: '/' },
      { name: 'SPORT', reference: '/topic/Sport' },
      { name: 'CULTURE', reference: '/topic/Culture' },
      { name: 'ENTERTAINMENT', reference: '/topic/Entertainment' },
      { name: 'ECONOMICS', reference: '/topic/Economics' },
      { name: 'TECH', reference: '/topic/Tech' },
      { name: 'HEALTH', reference: '/topic/Health' },
      { name: 'POLITICS', reference: '/topic/Politics' },
      { name: 'BUSINESS', reference: '/topic/Business' },
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
        });
        const unReadNotification = NotificationReducer.filter(
          x => x.status === 'Unread',
        );
        if (unReadNotification.length) {
          this.setState({
            isNotified: true,
          });
        }
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
   * @returns {*}
   */

  handleClickNotification = async id => {
    await axios.put(`/api/profiles/notifications/${id}`);
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
      isNotified,
    } = this.state;
    const { username, role } = getLoggedInUser();
    return (
      <div className="home-navigation">
        <div className="nav-bar">
          <a href="/">
            <img className="logo-style" src={logo} alt="Authors Haven logo" />
          </a>
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
              <SearchForm
                search={this.props.search}
                history={this.props.history}
              />
              {isNotified && <div className="notified"> </div>}
              {popup && (
                <OutsideClickHandler
                  onOutsideClick={() => {
                    popup && this.setState({ popup: false });
                  }}
                >
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
                                  <div
                                    className={
                                      element.status === 'Read'
                                        ? 'read_notification'
                                        : 'notifications'
                                    }
                                    onClick={() =>
                                      this.handleClickNotification(element.id)
                                    }
                                    role="button"
                                  >
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
                                      <div className="notification-time">
                                        <Moment fromNow>
                                          {element.createdAt}
                                        </Moment>
                                      </div>
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
                        {role === 'Admin' && (
                          <Link
                            className="profile-style user-menu"
                            to="/articles/reported"
                          >
                            Reported Articles
                          </Link>
                        )}
                        <Link className="profile-style user-menu" to="/logout">
                          Logout
                        </Link>
                      </React.Fragment>
                    )}
                  </div>
                </OutsideClickHandler>
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
            <a href={x.reference} key={categories.indexOf(x)}>
              <li>{x.name}</li>
            </a>
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
