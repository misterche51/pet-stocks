import React from 'react';
import TabButton from "./TabButton";

const TabHeader = (props) => {
  return (
    <span className = "tabs__header">
      <h2 className = "tabs__title">{props.title}</h2>
      <TabButton theme = {props.theme} onclick = {props.onclick} newsIsFocused = {props.newsIsFocused}/>
  </span>
  );
}

export default TabHeader;
