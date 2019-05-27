/* eslint-disable no-undef */
import '../../enzymeConfig';
import EditProfile from '../../components/editProfile';
import { findByTestAttribute, getConnectedComponent } from './test-helpers';

describe('Test Edit Profile Form', () => {
  describe('Test <EditProfile />', () => {
    let wrapper;
    beforeEach(() => {
      const initialstate = {
        values: {
          firstname: 'firstname',
          lastname: 'email',
          email: 'anyemail@host.domain',
          username: 'username',
          bio: 'bio',
        },
      };
      wrapper = getConnectedComponent(EditProfile, {}, initialstate);
    });

    it('Should render a input Component', () => {
      const input = findByTestAttribute(wrapper, 'profileFormComponent');
      expect(input.length).toBe(1);
    });
  });
});
