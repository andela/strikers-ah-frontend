import React from 'react';
import { mount } from 'enzyme';
import '../../enzymeConfig';

import { AllArticles } from '../../components/article/AllArticlesComponents';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZmlyc3RuYW1lIjpudWxsLCJsYXN0bmFtZSI6bnVsbCwidXNlcm5hbWUiOiJmcmFuayIsImVtYWlsIjoiaGFyZnJhazNAZ21haWwuY29tIiwiaW1hZ2UiOm51bGwsImlhdCI6MTU1OTU2NjY4NCwiZXhwIjoxNTU5NjUzMDg0fQ.aW1TnCYURFsV38nRwrPMuOHJhr1yLtu1BdDhqfi1UkY';
localStorage.setItem('token', token);

const props = {
  slug: 'fjakslneralnlk',
  handleOpen: jest.fn(),
  getOneArticle: jest.fn(),
  handleDelete: jest.fn(),
  sweeetAlert: jest.fn(),
  decodeToken: jest.fn(),
  deleteArticle: jest.fn(),
  article: {
    state: {
      Article: [],
    },
    allArticles: [
      {
        id: 1,
        title: 'dkjkd',
        description: 'fghkffbdbjd',
        body: 'dhh jdjjbfd kdfbdcdsj sdbdnfd',
        authorid: 8,
        slug: 'hjdshjsfkjfj',
      },
    ],
  },

  getAllArticles: jest.fn(),
  jwtDecode: jest.fn(),
  decodedToken: {
    id: 8,
  },
  willDelete: jest.fn(),
};

const wrapper = mount(<AllArticles {...props} />);

describe('should test the  `AllArticles`', () => {
  test('should render the  `AllArticles` component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should test the  `handleDelete` component', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleDelete');
    wrapper.instance().forceUpdate();
    // const formInput = wrapper.find('#submit-data');
    const submitBtn = wrapper.find('[data-test="submit-data"]');
    submitBtn.simulate('click');
    expect(spy).toHaveBeenCalled();
    spy.mockClear();
  });
});
