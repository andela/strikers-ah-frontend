import { combineReducers } from "redux";
import createArticle from "./articleReducer";
import { userLogin } from "./login.reducers";
import { forgotPassword } from "./resetpassword";
import { socialLoginUser } from "./socialLogin";
import valueChange from "./loginForm";
import userReducer from "./userReducer";
import profileFormReducer from "./profileFormReducer";
import userArticles from "./userArticles";

const rootReducer = combineReducers({
  createArticle,
  forgotPassword,
  socialLoginUser,
  userLogin,
  valueChange,
  userProfile: userReducer,
  profileForm: profileFormReducer,
  userArticles
});

export default rootReducer;
