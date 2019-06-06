/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Home-styles/home-body-content-style.css';
import nature from '../img/traveling.jpg';
import { main, featured, latest } from '../redux/actions/HomeAction';

/**
 * @author Clet Mwunguzi
 *
 */
class HomeBody extends Component {
  /**
   * @author Clet Mwunguzi
   * @param {*} props
   * @returns {*} Home body content
   */
  constructor(props) {
    super(props);
    this.props.main();
  }

  /**
   * @author Clet Mwunguzi
   * @returns {*} Home body content
   */
  render() {
    // if (this.props.homePageReducer.main != null) {

    // }
    return (
      <div className="container-1">
        <div className="other-articles">
          <div className="reading-history grid-element">
            <div className="article-header">From your Reading History</div>
            <div className="article">
              <div className="article-element">
                <img src={nature} alt="article" className="article-picture" />
              </div>
              <div className="article-content article-element">
                <div className="article-head">
                  At Vero Eos Et Accusamus Et Iusto Odio Dignissimos.
                </div>
                <div className="article-mark">
                  <span className="author-name">Sergey Brot</span>
                  <span className="article-time time-style"> | Mar 14</span>
                  <span className="read-time time-style"> . 4 min Read</span>
                </div>
                <div className="article-excerpt time-style">
                  Ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse. Read more...
                </div>
              </div>
            </div>
            <div className="article">
              <div className="article-element">
                <img src={nature} alt="article" className="article-picture" />
              </div>
              <div className="article-content article-element">
                <div className="article-head">
                  At Vero Eos Et Accusamus Et Iusto Odio Dignissimos.
                </div>
                <div className="article-mark">
                  <span className="author-name">Sergey Brot</span>
                  <span className="article-time time-style"> | Mar 14</span>
                  <span className="read-time time-style"> . 4 min Read</span>
                </div>
                <div className="article-excerpt time-style">
                  Ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse. Read more...
                </div>
              </div>
            </div>
            <div className="article">
              <div className="article-element">
                <img src={nature} alt="article" className="article-picture" />
              </div>
              <div className="article-content article-element">
                <div className="article-head">
                  At Vero Eos Et Accusamus Et Iusto Odio Dignissimos.
                </div>
                <div className="article-mark">
                  <span className="author-name">Sergey Brot</span>
                  <span className="article-time time-style"> | Mar 14</span>
                  <span className="read-time time-style"> . 4 min Read</span>
                </div>
                <div className="article-excerpt time-style">
                  Ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse. Read more...
                </div>
              </div>
            </div>
          </div>
          <div className="featured grid-element">
            <div className="article-header">
              <span className="side-header">Featured </span>
              <span className="side-link">SEE ALL</span>
            </div>
            <hr className="h-line" />
            <div className="side-article">
              <div className="side-article-head">
                Sed ut perspiciatis unde omnis iste natus error sit.
              </div>
              <div className="side-article-mark">
                <span className="author-name side-author-name">
                  Sergey Brot
                </span>
                <span className="article-time time-style side-time-style">
                  {' '}
                  | Mar 14
                </span>
                <span className="read-time time-style side-time-style">
                  {' '}
                  . 4 min Read
                </span>
              </div>
            </div>
          </div>
          <div className="latest grid-element">
            <div className="article-header">
              <span className="side-header">Latest</span>
              <span className="side-link">SEE ALL</span>
            </div>
            <hr className="h-line" />
            <div className="side-article">
              <div className="side-article-head">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              </div>
              <div className="side-article-mark">
                <span className="author-name side-author-name">
                  Sergey Brot
                </span>
                <span className="article-time time-style side-time-style">
                  {' '}
                  | Mar 14
                </span>
                <span className="read-time time-style side-time-style">
                  {' '}
                  . 4 min Read
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  homePageReducer: state.homePageReducer,
});
export default connect(
  mapStateToProps,
  { main, featured, latest },
)(HomeBody);
