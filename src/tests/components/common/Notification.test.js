import React from 'react';
import { shallow } from 'enzyme';
import '../../../enzymeConfig';
import { NotificationOption } from '../../../components/common/NotificationButton';

const props = {
  notifications: {
    emails: {
      status: 'false',
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

  // // props = {
  // //   notifications: {
  // //     emails: {
  // //       status : 'false'
  // //     }
  // //   },
  // //    handleChange: jest.fn(),
  // //    emailNotifications: jest.fn(),
  // //    emailNotificationsStatus: jest.fn(),
  // // }
  // // wrapper = shallow(<NotificationOption {...props} />);
  //  test('should render', () => {
  //   const spy = jest.spyOn(wrapper.instance(), 'handleChange');
  //   const IsForm = wrapper.find('notificationBtn');
  //   IsForm.simulate('change', spy);
  //   wrapper.instance().forceUpdate();
  //   expect(spy).toHaveBeenCalled();
  // });
});
