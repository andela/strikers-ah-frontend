/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Home-styles/slide-show-style.css';
import writing from '../../img/writing.jpg';
import writer from '../../img/writer.jpg';
import traveling from '../../img/traveling.jpg';
import article from '../../img/articles.png';
import road from '../../img/road.jpg';

const SlideShow = () => {
  return (
    <section id="slider">
      <input type="radio" name="slider" id="s1" />
      <input type="radio" name="slider" id="s2" />
      <input type="radio" name="slider" id="s3" defaultChecked />
      <input type="radio" name="slider" id="s4" />
      <input type="radio" name="slider" id="s5" />
      <label htmlFor="s1" id="slide1">
        <img src={writing} alt="writing-pic" />
        <div className="content">
          <div className="article-title">
            How Writing 1000 Words a Day Changed My Life
          </div>
          <Link to="/" className="read-more-style">
            {' '}
            Read more
          </Link>
        </div>
      </label>
      <label htmlFor="s2" id="slide2">
        <img src={writer} alt="authors" />
        <div className="content">
          <div className="article-title">
            What I Learned from Writing a Data Science Article Every Week for a
            Year
          </div>
          <Link to="/" className="read-more-style">
            {' '}
            Read more
          </Link>
        </div>
      </label>
      <label htmlFor="s3" id="slide3">
        <img src={traveling} alt="travel-pic" />
        <div className="content">
          <div className="article-title">
            15 Reflections on Human Nature To Make You a Better You in 2018
          </div>
          <Link to="/" className="read-more-style">
            {' '}
            Read more
          </Link>
        </div>
      </label>
      <label htmlFor="s4" id="slide4">
        <img src={article} alt="article-pic" />
        <div className="content">
          <div className="article-title">
            How to Build a Data Science Portfolio
          </div>
          <Link to="/" className="read-more-style">
            {' '}
            Read more
          </Link>
        </div>
      </label>
      <label htmlFor="s5" id="slide5">
        <img src={road} alt="road-pic" />
        <div className="content">
          <div className="article-title">
            How the Fuck Do You Change Your Life Direction?
          </div>
          <Link to="/" className="read-more-style">
            {' '}
            Read more
          </Link>
        </div>
      </label>
    </section>
  );
};

export default SlideShow;
