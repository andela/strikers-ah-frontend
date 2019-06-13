/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../css/Home-styles/slide-show-style.css';
import road from '../../img/road.jpg';
import { main } from '../../redux/actions/HomeAction';

/**
 * @author Clet Mwunguzi
 *
 */
export class SlideShow extends Component {
  /**
   * @author Clet Mwunguzi
   * @param {*} props
   * @returns {*} latest action
   */
  componentWillMount() {
    const { main: mains } = this.props;
    mains();
  }

  /**
   * @author Clet Mwunguzi
   * @returns {*} Slideshow
   */
  render() {
    const { PageReducer } = this.props;
    import('../../helpers/autoSlider');
    return (
      <section id="slider">
        <input type="radio" className="first" name="slider" id="s1" />
        <input type="radio" className="second" name="slider" id="s2" />
        <input
          type="radio"
          className="third"
          name="slider"
          id="s3"
          defaultChecked
        />
        <input type="radio" className="fourth" name="slider" id="s4" />
        <input type="radio" className="fifth" name="slider" id="s5" />
        {PageReducer && (
          <React.Fragment>
            <label htmlFor="s1" id="slide1">
              <img
                src={
                  PageReducer[0].image === 'null' ? road : PageReducer[0].image
                }
                alt="writing-pic"
              />
              <div className="content">
                <div className="article-title">{PageReducer[0].title}</div>
                <Link
                  to={`/article/${PageReducer[0].slug}`}
                  className="read-more-style"
                >
                  {' '}
                  Read more
                </Link>
              </div>
            </label>
            <label htmlFor="s2" id="slide2">
              <img
                src={
                  PageReducer[1].image === 'null' ? road : PageReducer[1].image
                }
                alt="authors"
              />
              <div className="content">
                <div className="article-title">{PageReducer[1].title}</div>
                <Link
                  to={`/article/${PageReducer[1].slug}`}
                  className="read-more-style"
                >
                  {' '}
                  Read more
                </Link>
              </div>
            </label>
            <label htmlFor="s3" id="slide3">
              <img
                src={
                  PageReducer[2].image === 'null' ? road : PageReducer[2].image
                }
                alt="travel-pic"
              />
              <div className="content">
                <div className="article-title">{PageReducer[2].title}</div>
                <Link
                  to={`/article/${PageReducer[2].slug}`}
                  className="read-more-style"
                >
                  {' '}
                  Read more
                </Link>
              </div>
            </label>
            <label htmlFor="s4" id="slide4">
              <img
                src={
                  PageReducer[3].image === 'null' ? road : PageReducer[3].image
                }
                alt="article-pic"
              />
              <div className="content">
                <div className="article-title">{PageReducer[3].title}</div>
                <Link
                  to={`/article/${PageReducer[3].slug}`}
                  className="read-more-style"
                >
                  {' '}
                  Read more
                </Link>
              </div>
            </label>
            <label htmlFor="s5" id="slide5">
              <img
                src={
                  PageReducer[4].image === 'null' ? road : PageReducer[4].image
                }
                alt="road-pic"
              />
              <div className="content">
                <div className="article-title">{PageReducer[4].title}</div>
                <Link
                  to={`/article/${PageReducer[4].slug}`}
                  className="read-more-style"
                >
                  {' '}
                  Read more
                </Link>
              </div>
            </label>
          </React.Fragment>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  PageReducer: state.homePageReducer.main,
});

export default connect(
  mapStateToProps,
  { main },
)(SlideShow);
