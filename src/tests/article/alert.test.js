import alertReducer from '../../redux/reducers/alertReducer';

import * as actionType from '../../redux/actionTypes/articleType';

const initialState = [];

describe('alert reducer tests', () => {
  test('should return an initial state if no action type was definied', () => {
    expect(alertReducer(undefined, {})).toEqual(initialState);
  });
  test('should set an alert', () => {
    const payload = [
      {
        msg: "title can't be empty",
        alertType: 'danger',
      },
    ];

    const newState = alertReducer(initialState, {
      type: actionType.SET_ALERT,
      payload,
    });

    expect(newState[0]).toEqual(payload);
  });
  test('should remove an alert', () => {
    const payload = [
      {
        id: '80865582-8835-11e9-bc42-526af7764f64',
        msg: "title can't be empty",
        alertType: 'danger',
      },
    ];

    const newState = alertReducer(initialState, {
      type: actionType.REMOVE_ALERT,
      payload,
    });

    expect(newState).toEqual([]);
  });
});
