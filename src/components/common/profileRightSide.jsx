import React from 'react';
import AccountInfo from './accountInfo';
import EditProfile from '../editProfile';
import UserArticle from './userArticle';
import '../../styles/css/userArticle.css';

const RightProfile = ({ accountInfo, editProfile, userArticles }) => {
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
        articles={userArticles}
      />
      {owner && editProfile.showForm && (
        <EditProfile
          currentValues={accountInfo}
          toggleEditProfile={editProfile.toggleEditProfile}
        />
      )}
      {userArticles.length > 0 && (
        <div className="user-articles">
          <h1 className="title">Articles created</h1>

          {!editProfile.showAddImageForm &&
            userArticles &&
            userArticles.map(article => {
              return <UserArticle articles={article} key={article.id} />;
            })}
        </div>
      )}
    </div>
  );
};

export default RightProfile;
