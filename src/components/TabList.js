import React, { Component } from 'react';
import TabNews from "./TabNews";
import TabСurrency from "./TabCurrency";
import TabCrypto from "./TabCrypto";

class TabList extends Component {
  render() {
    return (
      <ul className="main__tabs tabs">
        <TabNews title={'Last news'} theme={'news'}/>
        <TabСurrency title={'Currencies course'} theme={'currency'}/>
        <TabCrypto title={'Crypto course'} theme={'crypto'}/>
      </ul>
    );
  }
}

export default TabList;
