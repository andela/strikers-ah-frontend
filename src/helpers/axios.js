import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

// const token = localStorage.getItem('token');
const DEV_BASE_URL = process.env.BACKEND_URL;
export default axios.create({
  baseURL: DEV_BASE_URL,
  headers: {
    'x-access-token':
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZmlyc3RuYW1lIjpudWxsLCJsYXN0bmFtZSI6bnVsbCwidXNlcm5hbWUiOiJqc2lub2ZhZmZhZG11IiwiZW1haWwiOiJ3b2lvZmFmc0BnbWFpbC5jb20iLCJpbWFnZSI6bnVsbCwiaWF0IjoxNTU4NTU1NzI3LCJleHAiOjE1NTg2NDIxMjd9.juTzTQXtplepTWdE-WkL5t1etyM90rNz0QYLZprZIPk',
  },
});
