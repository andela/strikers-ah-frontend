import axios from 'axios';
import store from '../store';
import { VALUE_CHANGE, ADD_IMAGE } from '../actionTypes/formTypes';
import { EDIT_PROFILE_ERROR } from '../actionTypes/userTypes';
import {
  cloudinaryUploadPresets,
  cloudinaryUploadUrl,
} from '../../services/requestUrls';
import { editLoggedInUserProfile } from './userAction';

export const handleInputValueChange = value => {
  return dispatch => {
    dispatch({ type: VALUE_CHANGE, payload: value });
  };
};
export const addImage = userInfo => async dispatch => {
  try {
    const formData = new FormData();
    formData.append('file', userInfo.image);
    formData.append('upload_preset', cloudinaryUploadPresets);
    const headers = {
      'content-type': 'multipart/form-data',
    };
    const { data } = await axios.post(cloudinaryUploadUrl, formData, {
      headers,
    });
    dispatch({
      type: ADD_IMAGE,
      payload: { image: data.url },
    });
    store.dispatch(
      editLoggedInUserProfile({
        ...userInfo.userInfo,
        image: data.url,
      }),
    );
  } catch (err) {
    dispatch({
      type: EDIT_PROFILE_ERROR,
      payload: err,
    });
  }
};
