import {
  GET_CATEGOTY_SUCCESS,
  GET_CATEGOTY_FAIL,
} from '../actionTypes/articleCategory';

const initialState = {
  articleCategory: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CATEGOTY_SUCCESS:
      return {
        ...state,
        articleCategory: payload.categories,
      };
    case GET_CATEGOTY_FAIL:
      return {
        ...state,
        articleCategory: payload,
      };
    default:
      return state;
  }
};
