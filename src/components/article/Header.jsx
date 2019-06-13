import React from 'react';
import logo from '../../styles/img/icon/icon.svg';

const Header = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="brand">
            <img src={logo} alt="logo" className="brandLogo" />
            <a href="/" className="brandName">
              Author Haven
            </a>
          </div>
          <nav className="icons">
            <div className="search">
              <input
                type="text"
                name="search"
                className="search-text"
                placeholder="Search..."
              />
            </div>
            <div id="search-button">
              <i className="fas fa-search" />
            </div>
            <div className="bell">
              <a href="#notifications">
                <i className="far fa-bell" />
              </a>
            </div>
            <div className="user-circle">
              <a href="#userprofile">
                <i className="fas fa-user-circle" />
              </a>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
