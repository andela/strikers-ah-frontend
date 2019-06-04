import { combineReducers } from 'redux';
import Article from './articleReducer';
import { userLogin } from './login.reducers';
import { forgotPassword } from './resetpassword';
import { socialLoginUser } from './socialLogin';
import valueChange from './loginForm';
import userReducer from './userReducer';
import profileFormReducer from './profileFormReducer';
import userArticles from './userArticles';
import alertReducer from './alertReducer';
import { following } from './Following';
import commentReducer from './comment';
import { homePageReducer } from './homeReducer';
import bookmarkedArticlesReducer from './bookmarkedArticles';

const rootReducer = combineReducers({
  Article,
  forgotPassword,
  socialLoginUser,
  userLogin,
  valueChange,
  userProfile: userReducer,
  profileForm: profileFormReducer,
  userArticles,
  alertReducer,
  following,
  comments: commentReducer,
  homePageReducer,
  bookmarkedArticles: bookmarkedArticlesReducer,
});

export default rootReducer;
