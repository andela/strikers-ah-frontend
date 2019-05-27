import axios from 'axios';
import { apiUrl } from '../../services/requestUrls';
import { EDIT_USER_PROFILE, GET_USER_PROFILE } from '../actionTypes/userTypes';

export const getUserProfile = username => {
  return async dispatch => {
    try {
      const { data: userProfile } = await axios.get(
        `${apiUrl}/profiles/${username}`,
      );
      delete userProfile.profile.password;
      dispatch({
        type: GET_USER_PROFILE,
        payload: userProfile,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
export const editLoggedInUserProfile = user => {
  return async dispatch => {
    try {
      const { data } = await axios.put(`${apiUrl}/profiles/fmwibutsa`, user, {
        headers: {
          'x-access-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZmlyc3RuYW1lIjoiTXdpYnV0c2EiLCJsYXN0bmFtZSI6IkZsb3JpYmVydCIsInVzZXJuYW1lIjoiZm13aWJ1dHNhIiwiZW1haWwiOiJmbXdpYnV0c2FAZ21haWwuY29tIiwiaW1hZ2UiOiJodHRwOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RxaXl3eGc0aC9pbWFnZS91cGxvYWQvdjE1NTg1MzQ4MjMvdXNlci1wcm9maWxlL3RocjJscnJocXJpYmFrb2hsbHd2LnBuZyIsImlhdCI6MTU1ODk0NDkzMSwiZXhwIjoxNTU5MDMxMzMxfQ.OFz3NzjJxL4SCDWm59YyrXt1eVR4qSTUS3HiaGwpIS8',
          'x-auth-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZmlyc3RuYW1lIjoiTXdpYnV0c2EiLCJsYXN0bmFtZSI6IkZsb3JpYmVydCIsInVzZXJuYW1lIjoiZm13aWJ1dHNhIiwiZW1haWwiOiJmbXdpYnV0c2FAZ21haWwuY29tIiwiaW1hZ2UiOiJodHRwOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RxaXl3eGc0aC9pbWFnZS91cGxvYWQvdjE1NTg1MzQ4MjMvdXNlci1wcm9maWxlL3RocjJscnJocXJpYmFrb2hsbHd2LnBuZyIsImlhdCI6MTU1ODk0NDkzMSwiZXhwIjoxNTU5MDMxMzMxfQ.OFz3NzjJxL4SCDWm59YyrXt1eVR4qSTUS3HiaGwpIS8',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      dispatch({
        type: EDIT_USER_PROFILE,
        payload: { ...data },
      });
    } catch (err) {
      console.log(err);
    }
  };
};
