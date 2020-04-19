import React, { Component } from 'react';
import Tab from "./Tab";

class TabList extends Component {
  render() {
    return (
      <ul className="main__tabs tabs">
        <Tab title={'Last news'} theme={'news'}/>
        <Tab title={'Curerncies course'} theme={'currency'}/>
        <Tab title={'Quotes changes'} theme={'stocks'}/>
      </ul>
    );
  }
}

export default TabList;
