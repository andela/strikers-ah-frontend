import React, { Component } from 'react';
import { connect } from 'react-redux';
// import LeftProfile from './common/leftProfile';
import RightProfile from './common/profileRightSide';
import { getUserProfile, getUserArticles } from '../redux/actions/userAction';
import '../styles/css/profile.css';
import { getLoggedInUser } from '../helpers/authentication';

/**
 * @author Mwibutsa FLoribert
 * @returns { * } --
 */
class Profile extends Component {
  /**
   * @author Mwibutsa Floribert
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      editProfile: { showForm: false, showImageForm: false },
      pagination: { pageSize: 5, currentPage: 0 },
    };
    const {
      getUserProfile: getProfile,
      getUserArticles: getArticles,
    } = this.props;
    const { username } = this.props;
    getProfile(username);
    getArticles(username);
  }

  /**
   * @author Mwibutsa Floribert
   * @param { * } nextPage --
   * @param { * } pages --
   * @param { * } prev --
   * @param { * } next --
   * @returns { * } --
   */
  paginate = (nextPage, pages, prev = false, next = false) => {
    const { pagination } = this.state;
    let activePage = pagination.currentPage;
    if (prev) {
      if (pagination.currentPage === 0) activePage = pages - 1;
      else activePage -= 1;
    } else if (next) {
      if (pagination.currentPage === pages - 1) activePage = 0;
      else activePage += 1;
    } else {
      activePage = nextPage;
    }
    this.setState({ pagination: { ...pagination, currentPage: activePage } });
  };

  toggleEditProfile = () => {
    const { editProfile } = this.state;
    this.setState({ editProfile: { showForm: !editProfile.showForm } });
  };

  toggleShowImage = () => {
    const { editProfile } = this.state;
    this.setState({
      editProfile: { showImageForm: !editProfile.showImageForm },
    });
  };
  /**
   * @author Mwibutsa FLoribert
   * @param { Integer } loggedInUserId --
   * @param { Integer } userProfileId --
   * @returns { Boolean } returns the comparison of logged in user id and user profile
   */

  isOwner = (loggedInUserId, userProfileId) => {
    return loggedInUserId === userProfileId;
  };

  /**
   * @author Mwibutsa FLoribert
   * @returns { JSX } --
   */
  render() {
    const { accountInfo: user } = this.props;
    const { articles } = this.props;
    let userArticles = [];
    if (Object.keys(articles).length) {
      userArticles = articles.articles;
    }
    let { profile } = user;
    profile = profile || user;
    const defaultUser = {
      name: 'Not Provided',
      image:
        'https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699__480.png',
      bio: '',
      followers: [],
      followings: [],
    };
    const isLoggedIn = !!getLoggedInUser();
    const owner = getLoggedInUser().id === profile.id;
    let ownerClass = 'profile-page';
    if (!isLoggedIn || !owner) {
      ownerClass += ' friend-profile';
    }
    const { editProfile, pagination } = this.state;
    return (
      <div className={ownerClass} test-data="profile-page" id="profile-page">
        <div className="profile-grid">
          {profile.email && (
            <RightProfile
              accountInfo={{
                ...defaultUser,
                ...profile,
                owner,
              }}
              editProfile={{
                showForm: editProfile.showForm,
                toggleEditProfile: this.toggleEditProfile,
                toggleShowImage: {
                  visible: editProfile.showImageForm,
                  toggleForm: this.toggleShowImage,
                },
              }}
              userArticles={userArticles}
              pagination={pagination}
              paginate={this.paginate}
            />
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    accountInfo: state.userProfile.user,
    articles: state.userArticles,
  };
};
export default connect(
  mapStateToProps,
  { getUserProfile, getUserArticles },
)(Profile);
