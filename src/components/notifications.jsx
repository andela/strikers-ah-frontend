import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { notification } from '../redux/actions/HomeAction';
import notificationIcon from '../img/icons/notification.png';
import '../css/notification-page-styles/notification-page.css';
import Layout from './common/pageLayout';

/**
 * @author Clet Mwunguzi
 *
 */
class Notifications extends Component {
  state = {
    notificationMsg: '',
    allNotifications: [],
  };

  /**
   * @author Clet Mwunguzi
   * @param {*} props
   * @returns {*}  all notifications
   */
  componentDidMount() {
    const { notification: notifications } = this.props;
    notifications();
  }

  /**
   * @author Clet Mwunguzi
   * @param {*} nextProps
   * @returns {*} larrays of all notifications
   */
  componentWillReceiveProps(nextProps) {
    const { NotificationReducer } = nextProps;
    if (NotificationReducer) {
      if (NotificationReducer.length === 0) {
        this.setState({ notificationMsg: 'No notification yet' });
      } else {
        this.setState({ allNotifications: NotificationReducer });
      }
    }
  }

  /**
   * @author Clet Mwunguzi
   * @returns {*} Notifications component
   */
  render() {
    const { notificationMsg, allNotifications } = this.state;
    return (
      <Layout>
        <div className="notification-page">
          <div className="notification-title">Your notifications</div>
          {notificationMsg ||
            allNotifications.map(element => (
              <div
                className={
                  element.status === 'Read'
                    ? 'read_notification'
                    : 'one-notification'
                }
                key={element.id}
              >
                <img
                  className="notification-img"
                  src={notificationIcon}
                  alt="new notification"
                />
                <Link
                  className="notification-article-link"
                  to={_.takeRight(element.link.split('/'), 2).join('/')}
                >
                  <span>{element.message}</span>
                </Link>
              </div>
            ))}
        </div>
      </Layout>
    );
  }
}
const mapStateToProps = state => ({
  NotificationReducer: state.homePageReducer.notification,
  ErrorReducer: state.homePageReducer.error,
});

export default connect(
  mapStateToProps,
  { notification },
)(Notifications);
