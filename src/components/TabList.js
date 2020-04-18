import React, { Component } from 'react';
import Tab from "./Tab";

class TabList extends Component {
  render() {
    return (
      <ul className="main__tabs tabs">
        <Tab title={'Last news'} theme={'news'}/>
        <Tab title={'Curerncies course'}/>
        <Tab title={'Quotes changes'}/>
      </ul>
    );
  }
}

export default TabList;
