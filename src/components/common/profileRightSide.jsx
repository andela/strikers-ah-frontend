import React from 'react';
import AccountInfo from './accountInfo';
import EditProfile from '../editProfile';

const RightProfile = ({ accountInfo, editProfile }) => {
  const {
    firstname,
    lastname,
    image,
    bio,
    followers,
    followings,
    owner,
    username,
  } = accountInfo;
  const { length: totalFollowers } = followers;
  const { length: totalFollowings } = followings;
  if (!firstname && !lastname) {
    return (
      <h3 className="text-center" test-data="invaliUserNameComponent">
        No user with that username is found
      </h3>
    );
  }
  return (
    <div className="right-profile" test-data="rightProfileComponent">
      <AccountInfo
        image={
          image || 'https://img.icons8.com/bubbles/200/000000/add-user-male.png'
        }
        name={`${lastname} ${firstname}`}
        bio={bio}
        username={username}
        totalFollowers={totalFollowers}
        totalFollowings={totalFollowings}
        owner={owner}
        handleClick={editProfile.toggleEditProfile}
        showAddImageForm={editProfile.toggleShowImage}
        currentValues={accountInfo}
      />
      {editProfile.showForm && (
        <EditProfile
          currentValues={accountInfo}
          toggleEditProfile={editProfile.toggleEditProfile}
        />
      )}
    </div>
  );
};

export default RightProfile;
