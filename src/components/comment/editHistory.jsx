import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

const EditHistory = ({ history }) => {
  return (
    <div className="history-section">
      <p>{history.oldcomment}</p>
      <Moment fromNow>{history.createdAt}</Moment>
    </div>
  );
};
export default EditHistory;
