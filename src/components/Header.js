import React, { Component } from 'react';
import HeaderNav from "./HeaderNav";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <HeaderNav></HeaderNav>
      </header>
    );
  }
}

export default Header;
