import { FORGOT_PASSWORD, RESET_PASSWORD } from '../actionTypes/userTypes';
import axios from '../../helpers/axios';

export const forgotPassword = email => async dispatch => {
  try {
    const { data } = await axios.post('/api/auth/forgetpassword', { email });
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
    const { data } = await axios.put(`/api/auth/resetpassword/${token}`, {
      password,
    });
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
