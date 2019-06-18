import React from 'react';
import { shallow } from 'enzyme';
import '../../enzymeConfig';

import { EditArticle, EditorBar } from '../../components/article/EditArticle';

const event = {
  target: { value: 'title', name: 'input0' },
  tagInputs: [{ name: 'input0', value: 'fasdf' }],
};

const imageEvent = {
  target: {
    files: ['just an array'],
  },
  image: [],
};

const props = {
  title: 'this is the title',
  body: 'the body',
  slug: 'sorting-array-in-a-ascending-order-32488f8',
  taglist: [],
  match: {
    params: jest.fn(),
  },
  getOneArticle: jest.fn(),
  onSubmit: jest.fn(),
  article: {
    body: 'fhksjfhkahkfjah',
  },
  alert: jest.fn(),
  target: { name: 'special', value: 'party' },
  updateArticle: jest.fn(),
  data: {
    title: '',
    body: '',
  },
};
const wrapper = shallow(<EditArticle {...props} />);

describe('Edit article test', () => {
  test('should render the `EditArticle` component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should render the `EditArticle` component', () => {
    const Wrapper = shallow(<EditorBar />);
    expect(Wrapper).toMatchSnapshot();
  });
  test('should test the `onSubmit` button', () => {
    const spy = jest.spyOn(wrapper.instance(), 'onSubmit');
    wrapper.instance().forceUpdate();
    const formInput = wrapper.find('#publish');
    formInput.simulate('click');
    expect(spy).toHaveBeenCalled();
    spy.mockClear();
  });
  test('should test the `handleChange` method', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleChange');
    wrapper.instance().forceUpdate();
    const handlechange = wrapper.find('#title');
    handlechange.simulate('change', event);
    expect(spy).toHaveBeenCalled();
    spy.mockClear();
  });
  test('should test the `handleImage` method', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleImage');
    wrapper.instance().forceUpdate();
    const handlechange = wrapper.find('#sigleImage');
    handlechange.simulate('change', imageEvent);
    expect(spy).toHaveBeenCalled();
    spy.mockClear();
  });
  test('should test the `handleQuillChange` method', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleQuillChange');
    wrapper.instance().forceUpdate();
    const handlechange = wrapper.find('#body');
    handlechange.simulate('change', event);
    expect(spy).toHaveBeenCalled();
    spy.mockClear();
  });
  test('should test the `makeInput` method', () => {
    const spy = jest.spyOn(wrapper.instance(), 'makeInput');
    wrapper.instance().forceUpdate();
    const handlechange = wrapper.find('#makeInput');
    handlechange.simulate('click');
    expect(spy).toHaveBeenCalled();
    spy.mockClear();
  });
  test('should test the `tagInputChange` method', () => {
    const spy = jest.spyOn(wrapper.instance(), 'tagInputChange');
    wrapper.instance().forceUpdate();
    wrapper
      .find('#tagInputchange')
      .at(0)
      .simulate('change', event);
    expect(spy).toHaveBeenCalled();
    spy.mockClear();
  });
});
