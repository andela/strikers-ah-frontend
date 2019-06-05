/* eslint-disable no-undef */
import '../../enzymeConfig';
import Profile from '../../components/profile';
import { findByTestAttribute, getConnectedComponent } from './test-helpers';

describe('Render app components', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = getConnectedComponent(
      Profile,
      {},
      { articles: { articles: [{ id: 1, slug: 'any-slug-123' }] } },
    );
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
  });
});
