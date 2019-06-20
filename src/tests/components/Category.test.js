/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import '../../enzymeConfig';
import { Category, mapStateToProps } from '../../components/Category';

const props = {
  match: {
    params: {
      category: '',
    },
  },
  window: {
    location: {
      href: '',
    },
  },
  articles: jest.fn(),
  articleByCategory: {
    Articles: [
      {
        id: 2,
        image: 'sd.jpg',
        title: 'this title',
        description: 'here',
      },
    ],
  },
  mapItems: jest.fn(),
  randomArticle: jest.fn(),
  handleClick: jest.fn(),
  state: {
    currentPage: 1,
    articlePerPage: 4,
  },
  renderPageNumbers: jest.fn(),
};
let wrapper = shallow(<Category {...props} />);
describe('`ForgotPassword.jsx`', () => {
  test('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  props.articleByCategory = {};
  test('should ', () => {
    wrapper = shallow(<Category {...props} />);
    expect(props.articles).toHaveBeenCalled();
  });

  props.articleByCategory.Articles = [];
  test('should ', () => {
    wrapper = shallow(<Category {...props} />);
    expect(props.articles).toHaveBeenCalled();
  });
  test('should call the function ', () => {
    const state = {
      articleByCategory: {
        Articles: [
          {
            id: 2,
            image: 'sd.jpg',
            title: 'this title',
            description: 'here',
          },
        ],
      },
    };
    mapStateToProps(state);
  });
});
