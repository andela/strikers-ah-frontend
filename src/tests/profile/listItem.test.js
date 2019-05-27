/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import '../../enzymeConfig';
import ListItem from '../../components/common/listItem';
import { findByTestAttribute } from './test-helpers';

describe('Test inputs', () => {
  describe('Test <Input />', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        link: '/link',
        menu: 'Menu',
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it('Shoudl render a input Component', () => {
      const listItem = findByTestAttribute(wrapper, 'listItemComponent');
      expect(listItem.length).toBe(1);
    });
  });
});
