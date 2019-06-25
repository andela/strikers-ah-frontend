import createArticle from '../../redux/reducers/articleReducer';
import * as actionTypes from '../../redux/actionTypes/articleType';

const initialState = {
  allArticles: [],
  report: '',
};
describe('Article reducers', () => {
  test('should return an initialState if no state and action were defined', () => {
    expect(createArticle(undefined, {})).toEqual(initialState);
  });
  test('should handle create article', () => {
    expect(
      createArticle(undefined, {
        type: actionTypes.CREATE_ARTICLE,
        payload: {
          title: 'Lorem Ipsum is simply dummy',
          body: 'Lorem Ipsum is simply dummy',
        },
        error: '',
      }),
    ).toEqual({
      ...initialState,
      loading: true,
      article: {
        title: 'Lorem Ipsum is simply dummy',
        body: 'Lorem Ipsum is simply dummy',
      },
      error: '',
    });
  });
  test('should handle create article error', () => {
    const payload = {
      message: {
        error: 'error',
        loading: false,
      },
    };
    const newState = createArticle(initialState, {
      type: actionTypes.CREATE_ARTICLE_ERROR,
      payload,
    });
    expect(newState.error).toEqual(payload.message.error);
  });
  test('should handle getAll article reducer', () => {
    const payload = {
      article: {
        id: 123,
        title: 'hfkajsLorem Ipsum is simply dummyhf',
        body:
          'Lorem Ipsum is simply dummy hfkajsLorem Ipsum  hfkajsLorem Ipsum is simply dummyhf hfkajsLorem Ipsum is simply dummyhfis simply dummyhf hfkajsLorem Ipsum is simply dummyhf hfkajsLorem Ipsum is simply dummyhf',
        tagList: [],
        authorid: 1,
      },
    };

    const newstate = createArticle(initialState, {
      type: actionTypes.GET_ARTICLES,
      payload,
    });

    expect(newstate.allArticles).toEqual(payload.article);
  });
  // test('should handle getAll article error reducer', () => {
  //   const payload = {
  //     article: [],
  //     loading: true,
  //     success: false,
  //     message: {
  //       error: 'fjhaskh',
  //     },
  //   };
  //   const newstate = createArticle(initialState, {
  //     type: actionTypes.GET_ARTICLES_ERRORS,
  //     payload,
  //   });
  // console.log(newstate);
  // console.log('payload', payload);
  // expect(newstate.message).toEqual(payload);
  // });
  test('should handle GET_ONE_ARTICLE', () => {
    const payload = {
      article: {
        id: 123,
        title: 'hfkajsLorem Ipsum is simply dummyhf',
        body:
          'Lorem Ipsum is simply dummy hfkajsLorem Ipsum  hfkajsLorem Ipsum is simply dummyhf hfkajsLorem Ipsum is simply dummyhfis simply dummyhf hfkajsLorem Ipsum is simply dummyhf hfkajsLorem Ipsum is simply dummyhf',
        tagList: [],
        authorid: 1,
      },
    };
    const newState = createArticle(initialState, {
      type: actionTypes.GET_ONE_ARTICLE,
      payload,
    });

    expect(newState.article.article).toEqual(payload.article);
  });
  test('should handle GET_ONE_ARTICLE_ERROR', () => {
    const payload = {
      article: [],
      message: {
        error: 'fjhaskh',
      },
    };
    const newState = createArticle(initialState, {
      type: actionTypes.GET_ONE_ARTICLE_ERROR,
      payload,
    });

    expect(newState.message).toEqual(payload.message.error);
  });
  test('should handle DELETE_ARTICLE', () => {
    const payload = {
      slug: 'hello-there-devs-7b05622',
      message: 'Article deleted',
    };

    const newState = createArticle(initialState, {
      type: actionTypes.DELETE_ARTICLE,
      payload,
    });

    expect(newState.message).toEqual(payload.message);
  });
  test('should handle DELETE_ARTICLE_ERROR', () => {
    const payload = {
      article: [],
      message: 'Article deleted',
    };
    const newState = createArticle(initialState, {
      type: actionTypes.DELETE_ARTICLE_ERROR,
      payload,
    });

    expect(newState.message).toEqual(payload);
  });
  test('should handle UPDATE_ARTICLE', () => {
    const payload = {
      article: {
        slug: 'hello-there-devs-7b05622',
        loading: true,
      },
    };

    const newState = createArticle(initialState, {
      type: actionTypes.UPDATE_ARTICLE,
      payload,
    });

    expect(newState.article).toEqual(payload);
  });
  test('should handle UPDATE_ARTICLE_ERROR', () => {
    const payload = {
      error: 'error',
      loading: false,
    };

    const newState = createArticle(initialState, {
      type: actionTypes.UPDATE_ARTICLE_ERROR,
      payload,
    });

    expect(newState.article).toEqual(payload);
  });
  test('should handle BOOKMARK', () => {
    const payload = 'Bookmarked';
    const newState = createArticle(initialState, {
      type: actionTypes.BOOKMARK,
      payload,
    });

    expect(newState).toEqual({ ...newState, bookmarked: payload });
  });
  test('should handle REPORTED_ARTICLES', () => {
    const payload = [
      {
        id: 2,
        article: {
          image: 'http://me.u',
          slug: 'Hello-world-123rtr',
          title: 'Hello world',
        },
        category: 'Copywrite',
        description: 'for newbies',
      },
    ];
    const returnedState = createArticle(initialState, {
      type: actionTypes.REPORTED_ARTICLES,
      payload,
    });
    expect(returnedState).toEqual({ allArticles: [], report: payload });
  });
});
