import dotenv from 'dotenv';
import axios from '../helpers/axios';

dotenv.config();
const apiUrl = `${process.env.REACT_APP_BACKEND}/api`;

const logout = () => {
  return axios.get(`/api/auth/logout`);
};

const handleResponse = async response => {
  try {
    const text = await response.text();
    const data = await JSON.parse(text);
    if (!response.ok) {
      if (response.error) {
        logout();
      }
      const error = data && data.error;
      return Promise.reject(error);
    }

    return data;
  } catch (error) {
    logout();
    return Promise.reject(error);
  }
};
const login = (email, password) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  };

  return fetch(`${apiUrl}/auth/login`, requestOptions)
    .then(handleResponse)
    .then(user => {
      localStorage.setItem('token', user.user.token);
      return user;
    });
};
export default {
  login,
  logout,
  handleResponse,
};
