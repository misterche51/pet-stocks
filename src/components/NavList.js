import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class NavList extends Component {
  render() {
    return (
        <ul className = "nav__list">
          <li className = "nav__item">
            <NavLink className = "nav__link" to='/'>Portfolio</NavLink>
          </li>
          <li className = "nav__item">
            <NavLink className = "nav__link" to='/'>Currencies</NavLink>
          </li>
          <li className = "nav__item">
            <NavLink className = "nav__link" to='/'>Stocks</NavLink>
          </li>
        </ul>
    );
  }
}

export default NavList;
