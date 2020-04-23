import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import styles from './navList.module.css';

class NavList extends Component {
  render() {
    return (
        <ul className = {styles.list}>
          <li className = {styles.item}>
            <NavLink className = {styles.link} to='/'>Portfolio</NavLink>
          </li>
          <li className = {styles.item}>
            <NavLink className = {styles.link} to='/'>Currencies</NavLink>
          </li>
          <li className = {styles.item}>
            <NavLink className = {styles.link} to='/'>Stocks</NavLink>
          </li>
        </ul>
    );
  }
}

export default NavList;
