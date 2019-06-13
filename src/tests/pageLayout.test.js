import React from 'react';
import { shallow } from 'enzyme';
import '../enzymeConfig';
import Layout from '../components/common/pageLayout';

describe(' Test <Layout/>', () => {
  it('render <Layout/> without crashing', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper).toMatchSnapshot();
  });
});
