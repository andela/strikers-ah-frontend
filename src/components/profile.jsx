/* eslint-disable require-jsdoc */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeftProfile from './common/leftProfile';
import RightProfile from './common/profileRightSide';
import { getUserProfile, getUserArticles } from '../redux/actions/userAction';
import '../styles/css/profile.css';
import { getLoggedInUser } from '../helpers/authentication';
// import TextCard from './common/textCard';

const menuList = [
  { id: '1', link: '/bookmarked-articles', label: 'Bookmarked Articles' },
  { id: '2', link: '/reading-history', label: 'Reading History' },
  { id: '4', link: '/logout', label: 'Sign Out' },
];
class Profile extends Component {
  state = {
    editProfile: { showForm: false, showImageForm: false },
  };

  componentWillMount() {
    const {
      getUserProfile: getProfile,
      getUserArticles: getArticles,
    } = this.props;
    const { match } = this.props;
    const { username } = match.params;
    getProfile(username);
    getArticles(username);
  }

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
    let containerClass = 'profile-grid';
    if (!isLoggedIn || !owner) {
      containerClass += '-off';
    }
    const { editProfile } = this.state;
    return (
      <div className="profile-page" test-data="profile-page">
        <div className={containerClass}>
          {owner && <LeftProfile menuList={menuList} owner />}
          {profile.username && (
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
