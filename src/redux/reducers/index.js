import { combineReducers } from 'redux';
import { userProfile } from './userReducer';
import createArticle from './articleReducer';
import { forgotPassword } from './resetpassword';
import { socialLoginUser } from './socialLogin';

const rootReducer = combineReducers({
  userProfile,
  createArticle,
  forgotPassword,
  socialLoginUser,
});

export default rootReducer;
