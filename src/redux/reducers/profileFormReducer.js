import { VALUE_CHANGE, ADD_IMAGE } from '../actionTypes/formTypes';

const initialState = {
  values: {
    firstname: '',
    lastname: '',
    email: '',
    bio: '',
    username: '',
    image: '',
    updated: false,
  },
  errors: { error: 'No errors' },
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case VALUE_CHANGE:
      return {
        ...state,
        values: { ...state.values, ...payload },
      };
    case ADD_IMAGE:
      return {
        ...state,
        values: { ...state.values, ...payload },
      };
    default:
      return state;
  }
};
