/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import '../../enzymeConfig';
import EditHistory from '../../components/comment/editHistory';

const props = {
  history: {
    oldcomment: '',
    createdAt: '',
  },
  toggleEditCommentForm: jest.fn(),
  toggleEditHistory: jest.fn(),
};
const wrapper = shallow(<EditHistory {...props} />);
describe('`editHistory.jsx`', () => {
  test('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
