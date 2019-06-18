import React from 'react';
import logo from '../../styles/img/icon/icon.svg';
import SearchForm from '../search/searchForm';

const Header = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="brand">
            <img src={logo} alt="logo" className="brandLogo" />
            <a
              href="../../components/article/CreateArticle"
              className="brandName"
            >
              Author Haven
            </a>
          </div>
          <nav className="icons">
            <div className="search">
              <SearchForm />
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
