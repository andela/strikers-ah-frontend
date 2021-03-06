import { combineReducers } from 'redux';
import Article from './articleReducer';
import { userLogin } from './login.reducers';
import { forgotPassword } from './resetpassword';
import { socialLoginUser } from './socialLogin';
import valueChange from './loginForm';
import userReducer from './userReducer';
import profileFormReducer from './profileFormReducer';
import userArticles from './userArticles';
import { following } from './Following';
import commentReducer from './comment';
import { homePageReducer } from './homeReducer';
import bookmarkedArticlesReducer from './bookmarkedArticles';
import notifications from './notifications';
import like from './commentLike';
import rateArticle from './rateArticle';
import readingStats from './readingStatsArticles';
import articleByCategory from './articleByCategory';
import searchReducer from './searchReducer';
import getCategory from './reportReducer';
import articleCategory from './articleCategory';

const rootReducer = combineReducers({
  Article,
  forgotPassword,
  socialLoginUser,
  userLogin,
  valueChange,
  userProfile: userReducer,
  profileForm: profileFormReducer,
  userArticles,
  following,
  comments: commentReducer,
  homePageReducer,
  bookmarkedArticles: bookmarkedArticlesReducer,
  notifications,
  like,
  rateArticle,
  readingStats,
  articleByCategory,
  searchResult: searchReducer,
  getCategory,
  articleCategory,
});

export default rootReducer;
