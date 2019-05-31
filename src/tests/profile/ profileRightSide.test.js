/* eslint-disable no-undef */
import '../../enzymeConfig';
import RightProfile from '../../components/common/profileRightSide';
import { findByTestAttribute, getConnectedComponent } from './test-helpers';

describe('test profile right side', () => {
  describe('Render profile right side', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        accountInfo: {
          firstname: 'Mwibutsa',
          lastname: 'floribert',
          username: 'fmwibutsa',
          followers: [],
          followings: [],
        },
        editProfile: {
          toggleShowImage: { toggleForm: jest.fn() },
          showForm: false,
          toggleEditProfile: jest.fn(),
        },
        userArticles: [
          {
            id: 1,
            title: 'hello this is fake title',
            description: 'this is a dummy description',
          },
        ],
      };
      wrapper = getConnectedComponent(RightProfile, {}, props);
    });
    it('should render profile right side', () => {
      const profile = findByTestAttribute(wrapper, 'accountInfoComponent');
      expect(profile.length).toBe(1);
    });
  });
  describe('Render profile right side', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        accountInfo: {
          firstname: 'Mwibutsa',
          lastname: 'floribert',
          username: 'fmwibutsa',
          followers: [],
          followings: [],
          onwer: true,
        },
        editProfile: {
          toggleShowImage: { toggleForm: jest.fn() },
          showForm: false,
          toggleEditProfile: jest.fn(),
        },
        userArticles: [],
      };
      wrapper = getConnectedComponent(RightProfile, {}, props);
    });
    it('should render profile right side', () => {
      const profile = findByTestAttribute(wrapper, 'accountInfoComponent');
      expect(profile.length).toBe(1);
    });
  });
});
