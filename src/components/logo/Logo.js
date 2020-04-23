import React from 'react';
import { Icon } from 'react-icons-kit';
import { NavLink } from "react-router-dom";
import {pulse} from 'react-icons-kit/oct/pulse';
import styles from './logo.module.css';


const Logo = () => {
  return (
    <div className = {styles.logo}>
      <NavLink to = "/">
        <Icon className = {styles.logoIcon} size={40} icon={pulse} />
        <span className = {styles.logoTitle}>Pet Stocks</span>
      </NavLink>
    </div>
  );
}

export default Logo;
