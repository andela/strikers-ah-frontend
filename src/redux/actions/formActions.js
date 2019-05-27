import axios from 'axios';
import { VALUE_CHANGE, ADD_IMAGE } from '../actionTypes/formTypes';
import { EDIT_USER_PROFILE } from '../actionTypes/userTypes';
import {
  cloudinaryUploadPresets,
  cloudinaryUploadUrl,
} from '../../services/requestUrls';

export const handleInputValueChange = value => {
  return dispatch => {
    dispatch({ type: VALUE_CHANGE, payload: value });
  };
};
export const addImage = userInfo => {
  return async dispatch => {
    const formData = new FormData();
    formData.append('file', userInfo.image);
    formData.append('upload_preset', cloudinaryUploadPresets);
    const headers = {
      'content-type': 'multipart/form-data',
    };
    axios
      .post(cloudinaryUploadUrl, formData, {
        headers,
      })
      .then(res => {
        dispatch({
          type: ADD_IMAGE,
          payload: { image: res.data.url },
        });
        dispatch({
          type: EDIT_USER_PROFILE,
          payload: { ...userInfo.userInfo, image: res.data.url },
        });
      })
      .catch(err => console.log(err));
  };
};

export const showInputErrors = () => {};
