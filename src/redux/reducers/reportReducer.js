import * as types from '../actionTypes/ReportArticleTypes';

const initialState = {
  reportCategory: [],
};

/**
 * @author Innocent Nkunzi
 * @param {*} state
 * @returns {*} states
 */

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_REPORT_CATEGORY:
      return {
        ...state,
        reportCategory: payload.categories,
      };
    case types.GET_REPORT_CATEGORY_FAIL:
      return {
        ...state,
        message: payload,
      };
    case types.CREATE_REPORT_SUCCESS:
      return {
        ...state,
        report: payload.report,
      };
    case types.CREATE_REPORT_FAIL:
      return {
        ...state,
        message: payload,
      };
    default:
      return state;
  }
};
