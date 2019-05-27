import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeftProfile from './common/leftProfile';
import RightProfile from './common/profileRightSide';
import { getUserProfile } from '../redux/actions/userAction';
import '../styles/css/profile.css';
// import TextCard from './common/textCard';

const menuList = [
  { id: '1', link: '/bookmarked-articles', label: 'Bookmarked Articles' },
  { id: '2', link: '/reading-history', label: 'Reading History' },
  { id: '3', link: '/profile/change-password', label: 'Change Password' },
  { id: '4', link: '/logout', label: 'Sign Out' },
];
class Profile extends Component {
  state = {
    editProfile: { showForm: false, showImageForm: false },
  };

  async componentDidMount() {
    const { getUserProfile: getProfile } = this.props;
    const { match } = this.props;
    const { username } = match.params;
    await getProfile(username);
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
    const isLoggedIn = true;
    let containerClass = 'profile-grid';
    if (!isLoggedIn) {
      containerClass += '-off';
    }
    const { editProfile } = this.state;
    return (
      <div className="profile-page" test-data="profile-page">
        <div className={containerClass}>
          <LeftProfile menuList={menuList} owner />
          <RightProfile
            accountInfo={{
              ...defaultUser,
              ...profile,
              owner: true,
            }}
            editProfile={{
              showForm: editProfile.showForm,
              toggleEditProfile: this.toggleEditProfile,
              toggleShowImage: {
                visible: editProfile.showImageForm,
                toggleForm: this.toggleShowImage,
              },
            }}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    accountInfo: state.userProfile.user,
  };
};
export default connect(
  mapStateToProps,
  { getUserProfile },
)(Profile);
