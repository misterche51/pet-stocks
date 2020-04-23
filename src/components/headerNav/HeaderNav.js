import React, { Component } from 'react';
import Logo from "../logo/Logo";
import NavList from "../navList/NavList";
import styles from "./headerNav.module.css";


class HeaderNav extends Component {
  render() {
    return (
      <nav className={styles.nav}>
        <Logo></Logo>
        <NavList></NavList>
      </nav>
    );
  }
}

export default HeaderNav;
