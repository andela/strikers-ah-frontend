import React from 'react';
import { mount } from 'enzyme';
import '../../enzymeConfig';
import { Ratings, mapStateToProps } from '../../components/common/Ratings';

let props = {
  checkRatings: jest.fn(),
  rateArticle: jest.fn(),
  componentWillUpdate: jest.fn(),
  slug: 'this-is-props-slug',
};

let wrapper = mount(<Ratings {...props} />);

describe('Rate.jsx', () => {
  test('should be rendered', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should be able to call the checkRatings', () => {
    props = {
      checkRatings: jest.fn(),
      rateArticle: {
        ratings: '',
      },
      slug: 'this-is-props-slug',
    };
    wrapper = mount(<Ratings {...props} />);
    expect(props.checkRatings).toHaveBeenCalled();
  });

  test('should call the function ', () => {
    const state = {
      rateArticle: {
        rate: {
          error: '',
        },
      },
    };
    mapStateToProps(state);
  });
});
