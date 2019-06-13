import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import htmlToReact from 'html-react-parser';

const UserArticle = ({ articles, author }) => {
  articles.image = articles.image === 'null' ? false : articles.image;
  const { title, description, views, slug, image, createdAt } = articles;
  return (
    <div className="user-article" test-data="userArticleComponent">
      <div className="article">
        <div className="user-article-image">
          <img
            src={
              image ||
              'https://media.istockphoto.com/photos/abstract-network-connection-background-picture-id509731276?k=6&m=509731276&s=612x612&w=0&h=C8_3Gb8V7DHKZnO1BP-BHYKYfTvxxqJAM29OtvaC7Qs='
            }
            alt=""
          />
        </div>
        <div className="user-article-content">
          <div className="article-content">
            <h3>
              <Link to={`/article/${slug}`}>{htmlToReact(title)}</Link>
            </h3>
            <div className="stats">
              <span className="time-stamp">
                {author ? `@${author.username}` : ''}
              </span>
              <span className="time-stamp">
                <Moment fromNow>{createdAt}</Moment>
              </span>
              <span className="views">{views} Views</span>
            </div>
            <div className="description">{htmlToReact(description)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserArticle;
