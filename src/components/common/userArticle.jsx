import React from 'react';
import { Link } from 'react-router-dom';

const UserArticle = ({ articles }) => {
  articles.image = articles.image === 'null' ? false : articles.image;
  const { title, description, views, slug, image } = articles;
  return (
    <div className="user-article" test-data="userArticleComponent">
      <div className="article">
        <h3>
          <Link to={`/article/${slug}`}>{title}</Link>
        </h3>
        <div>
          <img src={image || 'http://lorempixel.com/400/200'} alt="" />
        </div>
        <p className="description">
          {image && <img src={image} alt="" className="image" />}
          {description}
        </p>
      </div>
      <div className="stats-container">
        <div className="stats">
          <h3>Views</h3>
          <span>{views}</span>
        </div>
      </div>
    </div>
  );
};

export default UserArticle;
