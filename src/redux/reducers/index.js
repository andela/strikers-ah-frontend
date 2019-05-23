import { combineReducers } from 'redux';
import { userProfile } from './userReducer';
import createArticle from './articleReducer';
import { forgotPassword } from './resetpassword';

const rootReducer = combineReducers({
  userProfile,
  createArticle,
  forgotPassword,
});

export default rootReducer;
