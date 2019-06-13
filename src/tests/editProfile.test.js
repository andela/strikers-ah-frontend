import '../enzymeConfig';
import { getConnectedComponent } from './profile/test-helpers';
import EditProfile from '../components/editProfile';

describe('TEST EDIT PROFILE', () => {
  let wrapper;
  let editProfileInstance;
  let event;
  let props = {};
  beforeEach(() => {
    props = {
      editLoggedInUserProfile: jest.fn(),
      toggleEditProfile: jest.fn(),
      currentValues: { email: 'email', username: 'username' },
    };
    wrapper = getConnectedComponent(EditProfile, {}, props);
    wrapper.setProps(props);
    editProfileInstance = wrapper.instance();
    event = { target: {}, preventDefault: jest.fn() };
  });

  test('on file change', () => {
    editProfileInstance.handleChange(event);
  });
  test('on file change', () => {
    delete props.currentValues;
    wrapper.setProps(props);
    editProfileInstance.handleSubmit(event);
  });
});
