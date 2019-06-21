import React from 'react';
import { shallow } from 'enzyme';
import '../enzymeConfig';

import {
  ReportArticleMessages,
  mapStateToprops,
} from '../components/ReportArticle/ReportArticleMessages';

const MessageProps = {
  reportCategory: {
    report: {
      article: {},
    },
  },
};

const MessageWrapper = shallow(<ReportArticleMessages {...MessageProps} />);

describe('should test report form', () => {
  test('should render report form', () => {
    expect(MessageWrapper).toMatchSnapshot();
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
});
