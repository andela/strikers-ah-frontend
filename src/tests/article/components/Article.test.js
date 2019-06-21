/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import '../../../enzymeConfig';
import {
  EditorBar,
  Editor,
  mapStateToprops,
} from '../../../components/article/ArticleForm';
import Body from '../../../components/article/Body';
import {
  CreateArticle,
  NoMatch,
} from '../../../components/article/CreateArticle';

import Header from '../../../components/article/Header';
import { AllArticles } from '../../../components/article/AllArticlesComponents';
import initialState from '../../../redux/reducers/ArticleInitialState';
import PrivateRoute from '../../../PrivateRoute';
import { Author } from '../../../components/article/Author';

const submitData = jest.fn();
const createArticle = jest.fn();
const handleChange = jest.fn();
const alert = jest.fn();
const globalprops = {
  title: 'Lorem Ipsum is simply dummy text of the printing',
  body:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  handleChange,
  submitData,
  createArticle,
  alert,
  articleCategories: {
    articleCategory: [{ id: 1, name: 'culture' }],
  },
  getArticleCategory: jest.fn(),
};
const allArticles = ['jkjkj'];
const AllArticlesProps = {
  articleCategory: [{ id: 1, name: 'culture' }],
  componentDidMount: jest.fn(),
  getAllArticles: jest.fn(),
  handleOpen: jest.fn(),
  handleDelete: jest.fn(),
  getOneArticle: jest.fn(),
  article: initialState,
  allArticles,
  state: {
    tagInputs: [{ name: 'input0', value: '' }],
  },
};

const proviteprops = {
  jwtDecode: jest.fn(),
};

const event = {
  target: { value: 'title', name: 'input0' },
  state: {
    tagInputs: [{ name: 'input0', value: 'fasdf' }],
  },
};

const imageEvent = {
  target: {
    files: ['just an array'],
  },
  image: [],
};

const wrapper = shallow(<Editor {...globalprops} />);

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
  test('should render the author', () => {
    const props = {
      article: {},
    };
    const Wrapper = shallow(<Author {...props} />);
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

// Testing the get all component

describe('Test the article component', () => {
  let Wrapper;

  test('should render get all component', () => {
    Wrapper = shallow(<AllArticles {...AllArticlesProps} />);
    expect(Wrapper).toMatchSnapshot();
  });
  test('component didmount test', () => {
    Wrapper = shallow(<AllArticles {...AllArticlesProps} />);
    expect(AllArticlesProps.getAllArticles).toHaveBeenCalled();
  });
  test('test the localstorage', () => {
    localStorage.setItem(
      'token',
      'fafjasfnlkajcoi9rq87450r0ufjc0asd8tfijfashfknuq47y8hfajhk',
    );
    Storage.prototype.getItem = jest.fn(() => 'token');

    Wrapper = shallow(<PrivateRoute {...proviteprops} />);
    expect(Wrapper).toMatchSnapshot();
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
  test('should test `mapstatetoprops`', () => {
    const mockedState = {
      Article: {
        article: {},
      },
    };
    const state = mapStateToprops(mockedState);
    expect(state).toBeTruthy();
  });
});
