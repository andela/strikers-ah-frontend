import React from 'react';
import '../enzymeConfig';
import { getComponent, findByTestAttribute } from './profile/test-helpers';
import Pagination from '../components/common/pagination';

describe('TEST PAGINATION COMPONENT', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = { pages: 2, activePage: 1, changePage: jest.fn() };
    wrapper = getComponent(<Pagination {...props} />);
  });
  test('Should be able to render pagination', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('On page change', () => {
    const nextLink = wrapper.find('.next');
    nextLink.simulate('click', { preventDefault: jest.fn() });
    const prevLink = wrapper.find('.prev');
    prevLink.simulate('click', { preventDefault: jest.fn() });
    const linksInLoop = findByTestAttribute(wrapper, 'linksInLoopComponent').at(
      0,
    );
    linksInLoop.simulate('click', { preventDefault: jest.fn() });
    expect(props.changePage).toHaveBeenCalledTimes(3);
  });
  test('When page size equal to pages', () => {
    props.pages = 1;
    wrapper = getComponent(<Pagination {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
