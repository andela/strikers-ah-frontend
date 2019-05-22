import axios from "../../helpers/axios";
import {
  CREATE_ARTICLE,
  CREATE_ARTICLE_ERROR
} from "../actionTypes/articleType";

const createArticle = data => async dispatch => {
  try {
    const res = await axios.post("/api/articles/", data);
    dispatch({
      type: CREATE_ARTICLE,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: CREATE_ARTICLE_ERROR,
      payload: { message: error.response.data, status: error.response.status }
    });
  }
};

export default createArticle;
