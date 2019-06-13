/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import 'react-web-tabs/dist/react-web-tabs.css';
import { Tab, TabPanel, Tabs, TabList } from 'react-web-tabs';
import RadioButton from './common/NotificationButton';
import BookmarkedArticles from './article/bookmarkedArticles';
import Profile from './profile';
// eslint-disable-next-line import/no-named-as-default

import '../styles/css/settings.css';

/**
 * @author frank harerimana
 * Settings component
 */
class Settings extends Component {
  /**
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.protectComponent();
  }

  /**
   * @author frank harerimana
   * @returns {*} component
   */
  protectComponent() {
    const user = localStorage.getItem('token');
    if (user === null) window.location.assign = '/login';
  }

  /**
   * @returns {*} component
   */
  render() {
    const { username } = this.props;
    return (
      <div>
        <div className="settings">
          <Tabs
            defaultTab="vertical-tab-zero"
            vertical
            className="vertical-tabs"
          >
            <TabList>
              <Tab tabFor="vertical-tab-zero">About</Tab>
              <Tab tabFor="vertical-tab-one">Bookmarks</Tab>
              <Tab tabFor="vertical-tab-three">Settings</Tab>
            </TabList>
            <TabPanel tabId="vertical-tab-zero">
              <Profile username={username} />
            </TabPanel>
            <TabPanel tabId="vertical-tab-one">
              <BookmarkedArticles />
            </TabPanel>
            <TabPanel tabId="vertical-tab-three">
              <RadioButton />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Settings;
