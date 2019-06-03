/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import InputForm from './InputForm';
import {
  emailNotifications,
  emailNotificationsStatus,
} from '../../redux/actions/Notifications';
import '../../styles/css/notificationButton.css';

/**
 * @author frank harerimana
 * notification opt-in and out component
 */
export class NotificationOption extends Component {
  /**
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.handleStatus();
  }

  /**
   * handleClick
   * @returns {*} action
   */
  handleStatus = () => {
    this.props.emailNotificationsStatus();
  };

  /**
   * handleClick
   * @returns {*} action
   */
  handleChange = () => {
    this.props.emailNotifications();
  };

  /**
   * @returns {*} component
   */
  render() {
    const { status } = this.props.notifications.emails;
    return (
      <div className="settingsHolder">
        <p className="emailNotificationsLabel"> Email Notifications </p>
        <label className="switch">
          <input
            className="switch-input"
            type="checkbox"
            checked={JSON.parse(status)}
            onChange={this.handleChange}
          />
          <span className="switch-label" checked data-on="On" data-off="Off" />
          <span className="switch-handle" />
        </label>
        <div />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notifications: state.notifications,
});

export default connect(
  mapStateToProps,
  { emailNotifications, emailNotificationsStatus },
)(NotificationOption);
