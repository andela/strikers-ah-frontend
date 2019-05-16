import React from 'react';

import '../css/signup-style/notificationStyle.css';

const EmailNotification = props => {
  const { email } = props;
  return (
    <div data-test="wrap">
      <h1 data-test="header">Check Your Inbox</h1>
      <div className="notif-paragraph notif-size" data-test="sub-header">
        We have sent a confirmation link to the email address:
      </div>
      <div className="notif-paragraph email-style" data-test="userEmail">
        {email}
      </div>
      <div className="notif-paragraph additional-msg" data-test="otherMessage">
        If you don&apos;t receive it in 5 min, please check your spam{' '}
      </div>
    </div>
  );
};

export default EmailNotification;
