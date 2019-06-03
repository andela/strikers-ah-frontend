/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import 'react-web-tabs/dist/react-web-tabs.css';
import { Tab, TabPanel, Tabs, TabList } from 'react-web-tabs';
import RadioButton from './common/NotificationButton';
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
    return (
      <div className="settings">
        <Tabs defaultTab="vertical-tab-one" vertical className="vertical-tabs">
          <TabList>
            <Tab tabFor="vertical-tab-one">Notifications</Tab>
            <Tab tabFor="vertical-tab-two">Bookmarks</Tab>
            <Tab tabFor="vertical-tab-three">Articles</Tab>
          </TabList>
          <TabPanel tabId="vertical-tab-one">
            <RadioButton />
          </TabPanel>
          <TabPanel tabId="vertical-tab-two">
            <p>Bookmarks</p>
          </TabPanel>

          <TabPanel tabId="vertical-tab-three">
            <p>Articles</p>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default Settings;
