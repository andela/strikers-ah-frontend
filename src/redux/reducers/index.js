import { combineReducers } from 'redux';
import { userProfile } from './userReducer';
import createArticle from './articleReducer';

const rootReducer = combineReducers({
  userProfile,
  createArticle,
});

export default rootReducer;
