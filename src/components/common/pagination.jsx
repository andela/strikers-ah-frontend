import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/css/pagination.css';

const Pagination = ({ changePage, pages, activePage }) => {
  if (pages === 1) {
    return <span />;
  }
  return (
    <div className="pagination-container">
      <Link
        onClick={e => {
          e.preventDefault();
          changePage(activePage, pages, true, false);
        }}
        className="pagination-link prev"
        to="/"
      >
        Prev
      </Link>
      {[...Array(pages).keys()].map(pageNumber => (
        <Link
          test-data="linksInLoopComponent"
          key={pageNumber}
          onClick={e => {
            e.preventDefault();
            changePage(pageNumber);
          }}
          className={`pagination-link ${
            pageNumber === activePage ? 'active' : ''
          }`}
          to="/"
        >
          {pageNumber + 1}
        </Link>
      ))}
      <Link
        onClick={e => {
          e.preventDefault();
          changePage(activePage, pages, false, true);
        }}
        className="pagination-link next"
        to="/"
      >
        Next
      </Link>
    </div>
  );
};
export default Pagination;
