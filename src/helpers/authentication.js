import jwtDecode from 'jwt-decode';

export const getUserToken = () => {
  const token = localStorage.getItem('token');
  return token;
};
const myHeaders = new Headers();
const token = getUserToken();
myHeaders.append('Accept', 'application/json');
myHeaders.append('Content-type', 'application/json');
myHeaders.append('x-access-token', `${token}`);
myHeaders.append('x-auth-token', `${token}`);
export const headers = myHeaders;
export const getLoggedInUser = () => {
  const userToken = getUserToken();
  if (userToken) {
    try {
      return jwtDecode(token);
    } catch (err) {
      return err;
    }
  }
  return false;
};
