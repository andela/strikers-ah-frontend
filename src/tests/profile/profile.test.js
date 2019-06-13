import jsonWebToken from 'jsonwebtoken';
import '../../enzymeConfig';
import Profile from '../../components/profile';
import { findByTestAttribute, getConnectedComponent } from './test-helpers';

describe('Render app components', () => {
  let wrapper;
  beforeEach(() => {
    const user = {
      id: 1,
      username: 'thisGuy',
    };
    const token = jsonWebToken.sign(user, 'keaf43y3Sefacert4873bdsfj');
    window.localStorage.setItem('token', token);
    wrapper = getConnectedComponent(Profile, {}, {});
    wrapper.setProps({
      accountInfo: { profile: { id: 1, email: 'thisEmail@host.com' } },
      articles: { articles: [{ id: 1, slug: 'any-slug-123' }] },
    });
    wrapper.setState({ pagination: { currentPage: 0, pageSize: 2 } });
  });
  it('renders without crashing', () => {
    const profile = findByTestAttribute(wrapper, 'profile-page');
    expect(profile.length).toBe(1);
  });

  it('<Profile /> Should be able to call getUserProfile()', () => {});

  describe('TEST PROFILE METHODS', () => {
    let profileInstance;
    beforeEach(() => {
      profileInstance = wrapper.instance();
    });

    it('should be able to toggle edit profile form', () => {
      profileInstance.toggleEditProfile();
      const { state } = profileInstance;
      expect(state.editProfile.showForm).toBe(true);
    });

    it('should be able to toggle upload image  form', () => {
      profileInstance.toggleShowImage();
      const { state } = profileInstance;
      profileInstance.setState({
        articles: { articles: { id: 1, slug: 'slug-123' } },
      });
      expect(state.editProfile.showImageForm).toBe(true);
    });
    it('should be able to paginate user articles', () => {
      profileInstance.paginate(1, 10, true, false);
      profileInstance.paginate(1, 10, false, true);
      profileInstance.paginate(1, 10);
    });
    it('should be able to paginate', () => {
      wrapper.setState({ pagination: { currentPage: 2, pageSize: 2 } });
      profileInstance.paginate(1, 10, true, false);
      profileInstance.paginate(1, 10, false, true);
    });
    it('should be able to check if the user is an owner', () => {
      profileInstance.isOwner(true, false);
    });
  });
});
