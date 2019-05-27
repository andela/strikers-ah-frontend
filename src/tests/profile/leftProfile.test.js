/* eslint-disable no-undef */
import React from 'react';
import '../../enzymeConfig';
import LeftProfile from '../../components/common/leftProfile';
import { findByTestAttribute, getComponent } from './test-helpers';

describe('Test Left profile', () => {
  describe('left profile if owner', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        owner: true,
        menuList: [{ id: 1, link: 'link', label: 'Label' }],
      };
      wrapper = getComponent(<LeftProfile {...props} />);
    });

    it('Should render left menu when the owner vies', () => {
      const leftMenu = findByTestAttribute(wrapper, 'leftProfileComponent');
      expect(leftMenu.length).toBe(1);
    });
  });
  describe('left profile if not owner', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        owner: false,
        menuList: [{ id: 1, link: 'link', label: 'Label' }],
      };
      wrapper = getComponent(<LeftProfile {...props} />);
    });

    it('Should render left menu when the false vies', () => {
      const leftMenu = findByTestAttribute(wrapper, 'leftProfileComponent');
      expect(leftMenu.length).toBe(0);
    });
  });
});
