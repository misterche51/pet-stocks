import React from 'react';
import TabButton from "../tabButton/TabButton";
import styles from './tabHeader.module.css';

const TabHeader = (props) => {
  return (
    <span className = {styles.wrapper}>
      <h2 className = {styles.title}>{props.title}</h2>
      <TabButton theme = {props.theme} onclick = {props.onclick} focused = {props.focused}/>
  </span>
  );
}

export default TabHeader;
