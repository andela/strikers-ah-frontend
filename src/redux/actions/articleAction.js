import axios from '../../helpers/axios';
import {
  CREATE_ARTICLE,
  CREATE_ARTICLE_ERROR,
} from '../actionTypes/articleType';

// eslint-disable-next-line import/prefer-default-export

const createArticle = data => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post(
      'http://localhost:5000/api/articles',
      data,
      config,
    );
    dispatch({
      type: CREATE_ARTICLE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_ARTICLE_ERROR,
      payload: { message: error.response.data, status: error.response.status },
    });
  }
};

export default createArticle;
