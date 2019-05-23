/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter } from 'react-router';
import { shallow } from 'enzyme';
import '../../enzymeConfig';
import { CreateArticle, NoMatch } from '../../components/article/CreateArticle';

describe('testing routes', () => {
  test('Valid path should pass', () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={['/article/create']}>
        <CreateArticle />
      </MemoryRouter>,
    );
    expect(wrapper.find(CreateArticle)).toHaveLength(1);
  });
  test('should return an invalid route', () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={['/article/create/unkown']}>
        <CreateArticle />
      </MemoryRouter>,
    );
    expect(wrapper.find(NoMatch)).toHaveLength(0);
  });
});
