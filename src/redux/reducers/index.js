import { combineReducers } from 'redux';
import { userProfile } from './userReducer';

const rootReducer = combineReducers({
  userProfile,
});

export default rootReducer;
