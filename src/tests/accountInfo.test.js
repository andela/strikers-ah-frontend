import React from 'react';
import { shallow } from 'enzyme';
import '../enzymeConfig';
import AccountInfo from '../components/common/accountInfo';

describe('<AccountInfo />', () => {
  let props;
  beforeEach(() => {
    props = {
      articles: [{}],
      owner: false,
      showAddImageForm: { toggleForm: jest.fn(), visible: true },
      name: '',
    };
  });
  it('renders without crashing', () => {
    const component = shallow(<AccountInfo {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('renders without crashing', () => {
    props.owner = true;
    const component = shallow(<AccountInfo {...props} />);
    expect(component).toMatchSnapshot();
  });
});
