import { VALUE_CHANGE } from '../redux/actionTypes/login';

export const valueChange = value => {
  return dispatch => {
    dispatch({
      type: VALUE_CHANGE,
      payload: value,
    });
  };
};
export const showErrors = () => {
  return {};
};
