import React from 'react';
import { shallow } from 'enzyme';
import '../enzymeConfig';
import Spinner from '../components/article/Spinner';

const Wrapper = shallow(<Spinner />);

describe('test for `UpdateMessageDisplay` component', () => {
  test('should render `UpdateMessageDisplay`', () => {
    expect(Wrapper).toMatchSnapshot();
  });
});
