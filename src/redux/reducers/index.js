import { combineReducers } from 'redux';
import { userProfile } from './userReducer';
import createArticle from './articleReducer';
import { userLogin } from './login.reducers';
import { forgotPassword } from './resetpassword';
import { socialLoginUser } from './socialLogin';
import valueChange from './loginForm';

const rootReducer = combineReducers({
  userProfile,
  createArticle,
  forgotPassword,
  socialLoginUser,
  userLogin,
  valueChange
});

export default rootReducer;
