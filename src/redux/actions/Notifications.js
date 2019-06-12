/* eslint-disable import/prefer-default-export */
import axios from '../../helpers/axios';
import { USER_NOTIFICATION } from '../actionTypes/userTypes';

export const emailNotifications = () => async dispatch => {
  try {
    const response = await axios.put('api/profiles/notifications/emails');
    dispatch({
      type: USER_NOTIFICATION,
      payload: {
        message: response.data.message,
        status: response.data.status,
      },
    });
  } catch (error) {
    return {
      error: error.response,
    };
  }
};

export const emailNotificationsStatus = () => async dispatch => {
  try {
    const response = await axios.get('api/profiles/notifications/emails');
    dispatch({
      type: USER_NOTIFICATION,
      payload: {
        message: response.data.message,
        status: JSON.parse(response.data.status),
      },
    });
  } catch (error) {
    return {
      error: error.response,
    };
  }
};
