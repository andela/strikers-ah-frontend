import React from 'react';
import jsonwebtoken from 'jsonwebtoken';
import { shallow } from 'enzyme';
import Routes from '../router';
import '../enzymeConfig';
import { findByTestAttribute } from './profile/test-helpers';

describe('Should be able to process different app routes', () => {
  let wrapper;
  beforeEach(() => {
    const user = {
      id: 1,
      username: 'username',
    };
    const token = jsonwebtoken.sign(user, 'as8y346987hjsdhguyasf');
    window.localStorage.setItem('token', token);
    wrapper = shallow(<Routes />);
  });

  test('should render routes', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have  user profile with settings when the visitor is owner', () => {
    const profileRouter = findByTestAttribute(wrapper, 'profileRouter');
    profileRouter
      .props()
      .render({ match: { params: { username: 'username' } } });
  });
  test('should have  user profile without settings when the visitor is not owner', () => {
    const profileRouter = findByTestAttribute(wrapper, 'profileRouter');
    profileRouter.props().render({ match: { params: {} } });
  });
});
