import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from '../actionTypes/articleType';

/**
 *
 * @author Innocent Nkunzi
 * @param {*} msg
 * @param {*} alertType
 * @returns {*} payload
 */
const setAlert = (msg, alertType) => async dispatch => {
  const id = uuid.v4();
  try {
    dispatch({
      type: SET_ALERT,
      payload: { msg, alertType, id },
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 5000);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export default setAlert;
