import React from 'react';
import { Link } from 'react-router-dom';
import ProfileButton from './profileButton';
import FollowButton from './FollowButton';
import UploadImageForm from './UploadImageForm';
import '../../styles/css/profile.css';

const AccountInfo = ({
  image,
  name,
  bio,
  totalFollowers,
  totalFollowings,
  username,
  owner,
  handleClick,
  showAddImageForm,
  articles,
  currentValues: currentUserInfo,
}) => {
  return (
    <div className="user-account-info" test-data="accountInfoComponent">
      <div className="user-account-flex">
        <div className="img-container">
          <img src={image} alt="" />
          {owner && (
            <button
              className="add-img-toggler"
              type="button"
              onClick={showAddImageForm.toggleForm}
            >
              +
            </button>
          )}
        </div>

        <div>
          <div className="info-container">
            <span className="name">{name.trim().length ? name : username}</span>
            <br />
            <span className="username">{`@${username ||
              name.split(' ')[0]}`}</span>
            {owner ? (
              <ProfileButton label="Edit Profile" handleClick={handleClick} />
            ) : (
              <FollowButton className="btn btn-follow" />
            )}
            <br />
            <span className="bio">{bio}</span>
          </div>
        </div>
      </div>
      <div className="statistics">
        <Link to="/profile" className="stat-label">
          <span className="label">Followers</span>
          <br />
          <span className="value">{totalFollowers}</span>
        </Link>
        <Link to="/profile" className="stat-label">
          <span className="label">Following</span>
          <br />
          <span className="value">{totalFollowings}</span>
        </Link>
        <Link to="/profile" className="stat-label">
          <span className="label">Articles</span>
          <br />
          <span className="value">{articles.length}</span>
        </Link>
      </div>
      {owner && showAddImageForm.visible && (
        <UploadImageForm
          toggleForm={showAddImageForm.toggleForm}
          currentUserInfo={currentUserInfo}
        />
      )}
    </div>
  );
};

export default AccountInfo;
