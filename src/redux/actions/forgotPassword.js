import axios from 'axios';
import { FORGOT_PASSWORD, RESET_PASSWORD } from '../actionTypes/userTypes';

export const forgotPassword = email => async dispatch => {
  try {
    const { data } = await axios.post(
      'https://strikers-ah-backend.herokuapp.com/api/auth/forgetpassword',
      { email },
    );
    dispatch({
      type: FORGOT_PASSWORD,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD,
      payload: error.response.data,
    });
  }
};

export const resetPassword = (password, token) => async dispatch => {
  try {
    const { data } = await axios.put(
      `https://strikers-ah-backend.herokuapp.com/api/auth/resetpassword/${token}`,
      { password },
    );
    dispatch({
      type: RESET_PASSWORD,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD,
      payload: error.response.data,
    });
  }
};
