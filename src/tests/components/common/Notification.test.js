import React from 'react';
import { shallow } from 'enzyme';
import '../../../enzymeConfig';
import { NotificationOption } from '../../../components/common/NotificationButton';

const props = {
  notifications: {
    emails: {
      status: true,
    },
  },
  handleChange: jest.fn(),
  emailNotifications: jest.fn(),
  emailNotificationsStatus: jest.fn(),
};
// eslint-disable-next-line react/jsx-filename-extension
const wrapper = shallow(<NotificationOption {...props} />);

describe('`Notification.jsx`', () => {
  test('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
