import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/css/userArticle.css';

const UserArticle = ({ articles }) => {
  const { title, description, views, slug } = articles;
  return (
    <div className="user-article" test-data="userArticleComponent">
      <div className="article">
        <h3>
          <Link to={`/articles/${slug}`}>{title}</Link>
        </h3>
        <p>{description}</p>
      </div>
      <div className="stats-container">
        <div className="stats">
          <h3>Views</h3>
          <strong>{views}</strong>
        </div>
      </div>
    </div>
  );
};

export default UserArticle;
