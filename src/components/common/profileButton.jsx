import React from 'react';

const ProfileButton = ({ label, handleClick, ...rest }) => {
  return (
    <button
      type="button"
      className="btn btn-follow"
      onClick={handleClick}
      test-data="profileButtonComponent"
      {...rest}
    >
      {label}
    </button>
  );
};

export default ProfileButton;
