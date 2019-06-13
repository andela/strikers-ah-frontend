import React from 'react';
import AccountInfo from './accountInfo';
import EditProfile from '../editProfile';
import UserArticle from './userArticle';
import { paginate } from '../../helpers/functions';
import Pagination from './pagination';
import '../../styles/css/userArticle.css';

const RightProfile = ({
  accountInfo,
  editProfile,
  userArticles,
  pagination,
  paginate: onPageChange,
}) => {
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
  const { showForm } = editProfile;
  const name = firstname || '';
  const prename = lastname || '';
  return (
    <div className="right-profile" test-data="rightProfileComponent">
      <AccountInfo
        image={
          image || 'https://img.icons8.com/bubbles/200/000000/add-user-male.png'
        }
        name={`${name} ${prename}`}
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
      {owner && showForm && (
        <EditProfile
          currentValues={accountInfo}
          toggleEditProfile={editProfile.toggleEditProfile}
        />
      )}
      {userArticles.length > 0 && (
        <div className="user-articles">
          <h1 className="title">Articles created</h1>

          {userArticles &&
            paginate(
              pagination.pageSize,
              pagination.currentPage,
              userArticles,
            ).map(article => (
              <UserArticle articles={article} key={article.id} />
            ))}
          <Pagination
            changePage={onPageChange}
            pages={Math.ceil(userArticles.length / pagination.pageSize)}
            activePage={pagination.currentPage}
          />
        </div>
      )}
    </div>
  );
};

export default RightProfile;
