/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const Alert = ({ alert }) =>
  alert !== null &&
  alert.length > 0 &&
  alert.map(alt => (
    <div key={alt.id} className={`alert alert-${alt.alertType}`}>
      {alt.msg}
    </div>
  ));
Alert.propTypes = {
  alert: PropTypes.array.isRequired,
};
const mapStateToProps = state => ({
  alert: state.alertReducer,
});

export default connect(mapStateToProps)(Alert);
