import React from 'react';
import TabHeader from "../tabHeader/TabHeader";
import Spinner from '../spinner/Spinner';

const TabDefault = (props) => {
  if (props.dataIsLoading) {
    return (
      <li className = {props.style}>
        <TabHeader theme = {props.theme} title={props.title}/>
        <Spinner/>
      </li>
    )
  }
  return (
    <li className = {props.style}>
      <TabHeader theme = {props.theme} title = {props.title} onclick = {props.onclick} focused = {props.focused}/>
      {props.children}
    </li>
  );
}

export default TabDefault;
