/* eslint-disable no-undef */
import '../../enzymeConfig';
import Profile from '../../components/profile';
import { findByTestAttribute, getConnectedComponent } from './test-helpers';

describe('Render app components', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = getConnectedComponent(Profile, {});
  });
  it('renders without crashing', () => {
    const profile = findByTestAttribute(wrapper, 'profile-page');
    expect(profile.length).toBe(1);
  });

  it('<Profile /> Should be able to call getUserProfile()', () => {});
});
