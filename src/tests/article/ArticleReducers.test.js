import createArticle from '../../redux/reducers/articleReducer';
import * as actionTypes from '../../redux/actionTypes/articleType';
import initialState from '../../redux/reducers/ArticleInitialState';

describe('Article reducers', () => {
  test('should return an initialState if no state and action were defined', () => {
    expect(createArticle(undefined, {})).toEqual(initialState);
  });

  test('should handle article creation', () => {
    expect(
      createArticle(undefined, {
        type: actionTypes.CREATE_ARTICLE,
        payload: {
          title: 'Lorem Ipsum is simply dummy',
          body: 'Lorem Ipsum is simply dummy',
        },
      }),
    ).toEqual({
      ...initialState,
      loading: true,
      article: {
        title: 'Lorem Ipsum is simply dummy',
        body: 'Lorem Ipsum is simply dummy',
      },
    });
  });
  // test('should handle article creation fail', () => {
  //   expect(
  //     createArticle(undefined, {
  //       type: actionTypes.CREATE_ARTICLE_ERROR,
  //       payload: {
  //         title: 'Lorem Ipsum is simply dummy',
  //         body: 'Lorem Ipsum is simply dummy',
  //       },
  //     }),
  //   ).toEqual({
  //     ...initialState,
  //     loading: false,
  //   });
  // });
});
