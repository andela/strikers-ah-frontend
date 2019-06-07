import '../enzymeConfig';
import { getConnectedComponent } from './profile/test-helpers';
import EditProfile from '../components/editProfile';

describe('TEST EDIT PROFILE', () => {
  let wrapper;
  let editProfileInstance;
  let event;
  beforeEach(() => {
    wrapper = getConnectedComponent(
      EditProfile,
      {},
      { editLoggedInUserProfile: jest.fn(), toggleEditProfile: jest.fn() },
    );
    editProfileInstance = wrapper.instance();
    event = { target: {}, preventDefault: jest.fn() };
  });

  test('on file change', () => {
    editProfileInstance.handleChange(event);
  });
  test('on file change', () => {
    editProfileInstance.handleSubmit(event);
  });
});
