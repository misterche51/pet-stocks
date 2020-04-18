import React from 'react';
import { Icon } from 'react-icons-kit';
import { NavLink } from "react-router-dom";
import {pulse} from 'react-icons-kit/oct/pulse';


const Logo = () => {
  return (
    <div className = "nav__logo">
      <NavLink to = "/">
        <Icon className = "nav__logo-icon"size={40} icon={pulse} />
        <span className = "nav__logo-title">Pet Stocks</span>
      </NavLink>
    </div>
  );
}

export default Logo;
