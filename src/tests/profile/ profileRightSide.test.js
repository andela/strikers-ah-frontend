/* eslint-disable no-undef */
import '../../enzymeConfig';
import RightProfile from '../../components/common/profileRightSide';
import { getConnectedComponent } from './test-helpers';

describe('test profile right side', () => {
  describe('Render profile right side', () => {
    let wrapper;
    let props;
    beforeEach(() => {
      props = {
        accountInfo: {
          firstname: 'Mwibutsa',
          lastname: 'floribert',
          username: 'fmwibutsa',
          followers: [],
          followings: [],
          owner: true,
        },
        editProfile: {
          toggleShowImage: { toggleForm: jest.fn() },
          showForm: true,
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
      expect(wrapper).toMatchSnapshot();
    });
    describe('', () => {
      beforeEach(() => {
        props.accountInfo.firstname = null;
        props.accountInfo.lastname = null;
        wrapper = getConnectedComponent(RightProfile, {}, props);
      });
      it('should render profile right side', () => {
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
