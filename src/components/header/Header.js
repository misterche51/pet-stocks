import React, { Component } from 'react';
import HeaderNav from "../headerNav/HeaderNav";
import styles from './header.module.css'

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <HeaderNav></HeaderNav>
      </header>
    );
  }
}

export default Header;
