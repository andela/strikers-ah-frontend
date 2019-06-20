import React from 'react';
import { shallow } from 'enzyme';
import '../../../enzymeConfig';
import { findByTestAttribute } from '../../profile/test-helpers';
import {
  BookmarkButton,
  mapStateToProps,
} from '../../../components/common/BookmarkButton';

const props = {
  handleClick: jest.fn(),
  bookmark: jest.fn(),
  article: {
    bookmark: true,
  },
};
let wrapper = shallow(<BookmarkButton {...props} />);

describe('BookmarkButton.jsx', () => {
  test('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should render', () => {
    props.article.bookmark = false;
    wrapper = shallow(<BookmarkButton {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should click button', () => {
    const button = findByTestAttribute(wrapper, 'bookmarkIcon');
    button.simulate('click', {});
    expect(props.bookmark).toHaveBeenCalled();
  });
  test('should show the last displayed value', () => {
    const mockedState = {
      Article: {
        article: {
          bookmark: true,
        },
      },
    };
    const state = mapStateToProps(mockedState);
    expect(state).toBeTruthy();
  });
});
