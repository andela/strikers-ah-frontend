import React from 'react';
import { shallow } from 'enzyme';
import '../enzymeConfig';
import SearchForm from '../components/search/searchForm';

describe('TEST SEARCH FORM', () => {
  let wrapper;
  let instance;
  beforeEach(() => {
    const props = {
      search: jest.fn(),
      history: [],
    };
    wrapper = shallow(<SearchForm {...props} />);
    instance = wrapper.instance();
  });

  test('Should render search Form', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('On value change', () => {
    instance.handleValueChange({
      target: { name: 'filter', value: 'keyword' },
    });
  });

  test('On submit', () => {
    instance.handleSubmit({
      preventDefault: jest.fn(),
    });
  });

  test('When searching on search page', () => {
    instance.setState({ isOnSearchPage: true });
    instance.handleSubmit({
      preventDefault: jest.fn(),
    });
  });

  test('When searching on search page', () => {
    instance.setState({ isOnSearchPage: false });
    const button = wrapper.find('button[type="submit"]');
    button.simulate('click', { preventDefault: jest.fn() });
    instance.handleSubmit({
      preventDefault: jest.fn(),
    });
  });
});
