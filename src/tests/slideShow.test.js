/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import '../enzymeConfig';
import SlideShow from '../components/common/slideshow';

describe('<SlideShow/>', () => {
  it('Should render slideshow without crashing', () => {
    const slideShow = shallow(<SlideShow />);
    expect(slideShow).toMatchSnapshot();
  });
});
