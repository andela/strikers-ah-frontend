import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Home-styles/home-style.css';
import logo from '../styles/img/logo.png';
import notification from '../img/icons/notifications-bell-button.svg';
import search from '../img/icons/search.svg';
import userProfile from '../img/icons/user.svg';
/**
 * @author Clet Mwunguzi
 *
 */
class HomeNavBar extends Component {
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
  };

  /**
   * @author Clet Mwunguzi
   * @returns {*} NavBar component
   */
  render() {
    const { categories } = this.state;
    const { user } = this.props;
    return (
      <div className="home-navigation">
        <div className="nav-bar">
          <img className="logo-style" src={logo} alt="Authors Haven logo" />
          {user ? (
            <React.Fragment>
              <img
                className="icons-style user-profile"
                src={userProfile}
                alt="profile"
              />
              <img
                className="icons-style"
                src={notification}
                alt="notification"
              />
              <img className="icons-style" src={search} alt="search" />
            </React.Fragment>
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

export default HomeNavBar;
