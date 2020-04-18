import React, { Component } from 'react';
import Logo from "./Logo";
import NavList from "./NavList";


class HeaderNav extends Component {
  render() {
    return (
      <nav className="header__nav nav">
        <Logo></Logo>
        <NavList></NavList>
      </nav>
    );
  }
}

export default HeaderNav;
