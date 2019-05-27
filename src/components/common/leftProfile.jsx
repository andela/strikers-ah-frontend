import React from 'react';
import ListItem from './listItem';

const LeftProfile = ({ owner, menuList }) => {
  if (!owner) {
    return null;
  }
  return (
    <div>
      <div className="left-profile" test-data="leftProfileComponent">
        <h3 className="text-center menu-title">Manage Account</h3>
        {menuList.map(menu => (
          <ListItem key={menu.id} link={menu.link} menu={menu.label} />
        ))}
      </div>
    </div>
  );
};

export default LeftProfile;
