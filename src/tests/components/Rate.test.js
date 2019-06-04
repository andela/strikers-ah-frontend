import React from 'react';
import { mount } from 'enzyme';
import '../../enzymeConfig';
import { Rate, mapStateToProps } from '../../components/common/Rate';

const props = {
  onPick: jest.fn(),
  MoodButton: jest.fn(),
  ratingArticle: jest.fn(),
  rateArticle: jest.fn(),
  emoji: jest.fn(),
  slug: 'this-is-the-slug',
  onClick: jest.fn(),
};

const wrapper = mount(<Rate {...props} />);

describe('Rate.jsx', () => {
  test('should be rendered', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should `click the button`', () => {
    const spy = jest.spyOn(wrapper.instance(), 'MoodButton');
    wrapper.instance().forceUpdate();
    const theButton = wrapper.find('#Terrible');
    theButton.simulate('click');
    expect(theButton.length).toBe(1);
    expect(spy).toHaveBeenCalled();
  });

  test('should ', () => {
    wrapper.instance().onPick();
    wrapper.update();
  });
  test('should ', () => {
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
