import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const token = localStorage.getItem('token');
const DEV_BASE_URL = process.env.REACT_APP_BACKEND;
export default axios.create({
  baseURL: DEV_BASE_URL,
  headers: {
    'x-access-token': `${token}`,
    Authorization: `Bearer ${token}`,
  },
});
