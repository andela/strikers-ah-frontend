import React from 'react';
import { Link } from 'react-router-dom';

const Author = ({ firstname, lastname, username, image, bio }) => {
  return (
    <Link className="author" to={`/${username}`}>
      <div className="author__image">
        <figure className="author__image--figure">
          <img src={image} alt="" />
        </figure>
      </div>
      <div className="author__info">
        <h3 className="author__name">
          {`${firstname === null ? '' : firstname} ${
            lastname === null ? '' : lastname
          }`}
        </h3>
        <h4 className="author__username">@{username}</h4>
        <p className="author__bio">{bio}</p>
      </div>
    </Link>
  );
};

export default Author;
