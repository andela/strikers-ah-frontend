import '../enzymeConfig';
import Notifications from '../components/notifications';
import { getConnectedComponent } from './profile/test-helpers';

const props = {
  notifications: jest.fn(),
};

let wrapper;
describe(' Test <Notifications/>', () => {
  beforeEach(() => {
    wrapper = getConnectedComponent(Notifications, {}, props);
  });
  it('should render <Notifications/>', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should test if it will show that there are no notifications yet', () => {
    wrapper.instance().componentWillReceiveProps({ NotificationReducer: [] });
    expect(wrapper.state().notificationMsg).toEqual('No notification yet');
  });

  it('should test if it will show that there all notifications', () => {
    wrapper.instance().componentWillReceiveProps({
      NotificationReducer: [{ id: 1, link: 'https://u.me/io/kli' }],
    });
    expect(wrapper.state().allNotifications).toEqual([
      { id: 1, link: 'https://u.me/io/kli' },
    ]);
  });
});
