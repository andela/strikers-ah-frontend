import React from 'react';
import { shallow } from 'enzyme';
import '../enzymeConfig';
import {
  ReportForm,
  mapStateToprops,
} from '../components/ReportArticle/ReportForm';
import Modal from '../components/ReportArticle/Modal';

const props = {
  article: {
    slug: 'fafasf',
  },
  report: {
    article: 'fasf',
  },
  reportCategory: {
    reportCategory: [
      { id: 1, name: 'fasklfjlak' },
      { id: 1, name: 'fasklfjlak' },
    ],
  },
  showModal: jest.fn(),
  createReport: jest.fn(),
  k: 1,
  state: {
    category: '1',
    description: 'Abuse',
    show: false,
  },
  getCategory: jest.fn(),
};

const modalProps = {
  handleClose: jest.fn(),
  children: jest.fn(),
  hideModal: jest.fn(),
  show: true,
};

const event = {
  target: { value: 'title', name: 'input0' },
};

const wrapper = shallow(<ReportForm {...props} />);
const Wrapper = shallow(<Modal {...modalProps} />);

describe('should test report form', () => {
  test('should render report form', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should render report form', () => {
    modalProps.show = true;
    expect(Wrapper).toMatchSnapshot();
  });

  test('should test the  `openModal` component', () => {
    const spy = jest.spyOn(wrapper.instance(), 'showModal');
    wrapper.instance().forceUpdate();
    const submitBtn = wrapper.find('#showmodal');
    submitBtn.simulate('click');
    expect(spy).toHaveBeenCalled();
    spy.mockClear();
  });
  test('should test the  `reportButton` component', () => {
    const spy = jest.spyOn(wrapper.instance(), 'reportArticle');
    wrapper.instance().forceUpdate();
    const submitBtn = wrapper.find('#reportButton');
    submitBtn.simulate('click');
    expect(spy).toHaveBeenCalled();
    spy.mockClear();
  });
  test('should test `mapStateToprops` in reportArcleDisplayMessage', () => {
    const mockState = {
      getCategory: {
        reportCategory: [],
      },
      Article: {
        article: {},
      },
    };
    const state = mapStateToprops(mockState);
    expect(state).toBeTruthy();
  });
  test('should test the `handleChange` method', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleChange');
    wrapper.instance().forceUpdate();
    const handlechange = wrapper.find('#test');
    handlechange.simulate('change', event);
    expect(spy).toHaveBeenCalled();
    spy.mockClear();
  });
});
