import React, { Component } from 'react';
import TabList from '../tabList/TabList';
import styles from './main.module.css'

class Main extends Component {
  render() {
    return (
      <main className = {styles.main}>
        <TabList/>
      </main>
    );
  }
}

export default Main;
