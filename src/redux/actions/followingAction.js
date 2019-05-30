/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from '../../helpers/axios';
import { FOLLOW, UNFOLLOW, FOLLOW_STATUS } from '../actionTypes/userTypes';

export const followUser = username => async dispatch => {
  try {
    await axios.post(`/api/profiles/${username}/follow`);
    dispatch({
      type: FOLLOW,
      payload: 'following',
    });
  } catch (error) {
    <Redirect to="login" />;
  }
};

export const unfollowUser = username => async dispatch => {
  try {
    await axios.delete(`/api/profiles/${username}/follow`);
    dispatch({
      type: UNFOLLOW,
      payload: 'follow',
    });
  } catch (error) {
    <Redirect to="login" />;
  }
};

export const checkProfileFollowStatus = username => async dispatch => {
  try {
    const response = await axios.get(`/api/profiles/status/${username}`);
    dispatch({
      type: FOLLOW_STATUS,
      payload: response.data.response === 'true' ? 'following' : 'follow',
    });
  } catch (error) {
    <Redirect to="login" />;
  }
};
