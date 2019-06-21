import {
  GET_REPORT_CATEGORY,
  GET_REPORT_CATEGORY_FAIL,
  CREATE_REPORT_SUCCESS,
  CREATE_REPORT_FAIL,
} from '../actionTypes/ReportArticleTypes';
import axios from '../../helpers/axios';

export const getCategory = () => async dispatch => {
  try {
    const res = await axios.get('/api/articles/report/category');
    dispatch({
      type: GET_REPORT_CATEGORY,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_REPORT_CATEGORY_FAIL,
      payload: { message: error.response.data },
    });
  }
};

export const createReport = (slug, data) => async dispatch => {
  try {
    const res = await axios.post(`/api/articles/${slug}/report/`, data);
    dispatch({
      type: CREATE_REPORT_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_REPORT_FAIL,
      payload: { message: error.response.data },
    });
  }
};
