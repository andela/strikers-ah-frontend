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
import { AllArticles } from '../../../components/article/AllArticlesComponents';
import initialState from '../../../redux/reducers/ArticleInitialState';
import PrivateRoute from '../../../PrivateRoute';
// import { EditArticle } from '../../../components/article/EditArticle';

const submitData = jest.fn();
const createArticle = jest.fn();
const handleChange = jest.fn();
const alert = jest.fn();
const props = {
  title: 'Lorem Ipsum is simply dummy text of the printing',
  body:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  handleChange,
  submitData,
  createArticle,
  alert,
};
const allArticles = ['jkjkj'];
const AllArticlesProps = {
  componentDidMount: jest.fn(),
  getAllArticles: jest.fn(),
  handleOpen: jest.fn(),
  handleDelete: jest.fn(),
  getOneArticle: jest.fn(),
  article: initialState,
  allArticles,
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
    // const localStorageMock = {
    //   getItem: jest.fn(),
    //   setItem: jest.fn(),
    //   clear: jest.fn(),
    // };
    localStorage.setItem(
      'token',
      'fafjasfnlkajcoi9rq87450r0ufjc0asd8tfijfashfknuq47y8hfajhk',
    );
    Storage.prototype.getItem = jest.fn(() => 'token');
    // const token = localStorage.getItem('token');
    // global.localStorage = localStorageMock;
    // expect(localStorage.getItem.mock.calls.length).toBe(1);
    // jest.spyOn(localStorageMock, 'setItem');
    // global.localStorage.setItem = jest.fn();

    // // assertions as usual:
    // expect(localStorage.getItem).toHaveBeenCalledWith('token');

    Wrapper = shallow(<PrivateRoute />);
    expect(Wrapper).toMatchSnapshot();
  });
});

// describe('test the `EditArticle.jsx`', () => {
//   const EditArticleProps = {
//     title: 'fafaf',
//     body: 'fasfas',
//     slug: 'jfasfafasofsofjasf-jfa09909',
//     params: '',
//     taglist: [],
//     handleChange: jest.fn(),
//     onSubmit: jest.fn(),
//     componentWillMount: jest.fn(),
//   };
//   test('test the `snapshot`', () => {
//     const Wrapper = shallow(<EditArticle {...EditArticleProps} />);
//     expect(Wrapper).toMatchSnapshot();
//   });
//   test('test the `componentwillmount`', () => {
//     const match = {
//       params: {
//         slug: 'ofjasljasjl-9990909',
//       },
//     };
//     const Wrapper = shallow(<EditArticle match={match} />);
//     const instance = Wrapper.instance();
//     jest.spyOn(instance, 'getOneArticle');
//     instance.componentDidMount();
//     expect(instance.getOneArticle.toHaveBeenCalled());
//   });
// });
// describe('testing the buttons', () => {
//   const EditArticleProps = {
//     title: 'fafaf',
//     body: 'fasfas',
//     slug: 'jfasfafasofsofjasf-jfa09909',
//     params: '',
//     taglist: [],
//     handleChange: jest.fn(),
//     onSubmit: jest.fn(),
//     componentWillMount: jest.fn(),
//   };
//   test('should test the `onsubmit` button', () => {
//     const match = {
//       params: {
//         slug: 'ofjasljasjl-9990909',
//       },
//     };
//     const Wrapper = shallow(<EditArticle match={match} />);
//     const instance = Wrapper.instance();
//     const spy = jest.spyOn(instance, 'onSubmit');
//     const button = Wrapper.find('#publish');

//     button.simulate('click');
//     expect(spy).toHaveBeenCalled();
//   });
// });
