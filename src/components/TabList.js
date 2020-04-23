import React, { Component } from 'react';
import TabNews from "./tabNews/TabNews";
import TabСurrency from "./tabCurrency/TabCurrency";
import TabCrypto from "./tabCrypto/TabCrypto";

import { connect } from 'react-redux';

class TabList extends Component {

  render() {
    if (this.props.newsIsFocused) {
      return (
        <ul className="main__tabs tabs tabs--decompose">
          <TabNews title={'Last news'} theme={'news'}/>
        </ul>
      )
    }
    return (
      <ul className="main__tabs tabs">
        <TabNews title={'Last news'} theme={'news'}/>
        <TabСurrency title={'Currencies course'} theme={'currency'}/>
        <TabCrypto title={'Crypto course'} theme={'crypto'}/>
      </ul>
    );
  }
}
function mapStateToProps (state) {
  return {
    newsIsFocused: state.news.newsIsFocused,
  }
}

export default connect(mapStateToProps)(TabList);
