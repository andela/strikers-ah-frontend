/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import '../../../enzymeConfig';
import { ArticleForm } from '../../../components/article/ArticleForm';
import Body from '../../../components/article/Body';
import {
  CreateArticle,
  NoMatch,
} from '../../../components/article/CreateArticle';
import EditorBar from '../../../components/article/EditorBar';
import Header from '../../../components/article/Header';

const submitData = jest.fn();
const createArticle = jest.fn();
const handleChange = jest.fn();
const props = {
  title: 'Lorem Ipsum is simply dummy text of the printing',
  body:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  handleChange,
  submitData,
  createArticle,
};
const event = { target: { name: 'special', value: 'party' } };
const wrapper = shallow(<ArticleForm {...props} />);

describe('snapshot testing', () => {
  test('should render the article form', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should render the body', () => {
    const Wrapper = shallow(<Body />);
    expect(Wrapper).toMatchSnapshot();
  });
  test('should render the CreateArticle', () => {
    const Wrapper = shallow(<CreateArticle />);
    expect(Wrapper).toMatchSnapshot();
  });
  test("should render the NoMatch when a route don't exist", () => {
    const Wrapper = shallow(<NoMatch />);
    expect(Wrapper).toMatchSnapshot();
  });
  test("should render the editor bar when a route don't exist", () => {
    const Wrapper = shallow(<EditorBar />);
    expect(Wrapper).toMatchSnapshot();
  });
  test("should render the editor bar when a route don't exist", () => {
    const Wrapper = shallow(<Header />);
    expect(Wrapper).toMatchSnapshot();
  });
});
describe('when clicking on publish button', () => {
  let instance;
  beforeEach(() => {
    instance = wrapper.instance();
    jest.spyOn(instance, 'onSubmit');
  });
  afterEach(() => {
    instance.onSubmit.mockClear();
  });
  test('should call the submitData on button click', () => {
    wrapper
      .find('[id="publish"]')
      .at(0)
      .simulate('click');
    expect(instance.onSubmit).toHaveBeenCalled();
  });
});
describe('when typing in the textarea', () => {
  test('check if the onchange function was call', () => {
    // const Wrapper = shallow(<ArticleForm {...props} />);
    const spy = jest.spyOn(wrapper.instance(), 'handleChange');
    wrapper.update();
    const formInput = wrapper.find('#title');
    formInput.simulate('change', event);
    expect(formInput.length).toBe(1);
    spy.mockClear();
  });
});
