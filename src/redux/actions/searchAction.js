import { SEARCH_RESULTS, NO_SEARCH_RESULT } from '../actionTypes/searchTypes';
import axios from '../../helpers/axios';

export default ({ filter, keyword }) => dispatch => {
  try {
    const { data } = axios.get(`/api/search?${filter}=${keyword}`);
    dispatch({
      type: SEARCH_RESULTS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: NO_SEARCH_RESULT,
      payload: err.response.data,
    });
  }
};
