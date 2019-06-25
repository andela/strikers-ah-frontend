import {
  CREATE_REPORT_SUCCESS,
  CREATE_REPORT_FAIL,
  GET_REPORT_CATEGORY,
  GET_REPORT_CATEGORY_FAIL,
} from '../redux/actionTypes/ReportArticleTypes';

import ReportReducer from '../redux/reducers/reportReducer';

const initialState = {
  reportCategory: [],
};
describe('report reducer tests', () => {
  test('should return an initialState if no state and action were defined', () => {
    expect(ReportReducer(undefined, {})).toEqual(initialState);
  });
  test('should handle create report', () => {
    const payload = {
      report: {
        category: 'Abusive',
        description: 'this article bla bla bla ...',
      },
    };
    const newState = ReportReducer(initialState, {
      type: CREATE_REPORT_SUCCESS,
      payload,
    });
    expect(newState.report).toEqual(payload.report);
  });
  test('should handle create report error', () => {
    const payload = {
      message: {
        error: 'error',
      },
    };
    const newState = ReportReducer(initialState, {
      type: CREATE_REPORT_FAIL,
      payload,
    });
    expect(newState.message).toEqual(payload);
  });
});
describe('test get category', () => {
  test('should get all category', () => {
    const payload = {
      categories: [
        {
          id: 1,
          name: 'Abusive',
        },
      ],
    };
    const newState = ReportReducer(initialState, {
      type: GET_REPORT_CATEGORY,
      payload,
    });
    expect(newState.reportCategory).toEqual(payload.categories);
  });
  test('should fail to return all categories', () => {
    const payload = {
      message: 'nothing',
    };
    const newState = ReportReducer(initialState, {
      type: GET_REPORT_CATEGORY_FAIL,
      payload,
    });
    expect(newState.message).toEqual(payload);
  });
});
