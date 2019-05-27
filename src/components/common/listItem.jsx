import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ menu, link }) => {
  return (
    <li className="list-item" test-data="listItemComponent">
      <Link to={link} className="link">
        {menu}
      </Link>
    </li>
  );
};

export default ListItem;
