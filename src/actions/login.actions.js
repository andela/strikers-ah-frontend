import loginService from '../services/login.service';
import {
  INVALID_CREDENTIALS,
  USER_LOGIN,
} from '../redux/actionTypes/userTypes';

const logout = () => {
  return loginService.logout();
};
const login = (email, password) => {
  return dispatch =>
    loginService.login(email, password).then(
      user => {
        dispatch({
          type: USER_LOGIN,
          payload: user,
        });
      },
      error => {
        dispatch({
          type: INVALID_CREDENTIALS,
          payload: error,
        });
      },
    );
};

export { login, logout };
