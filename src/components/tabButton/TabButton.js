import React from 'react';
import { Icon } from 'react-icons-kit';
import {arrowMaximise} from 'react-icons-kit/typicons/arrowMaximise';
import {keyboard} from 'react-icons-kit/icomoon/keyboard';
import {arrowUnsorted} from 'react-icons-kit/typicons/arrowUnsorted';
import {arrowMinimise} from 'react-icons-kit/typicons/arrowMinimise';
import styles from './tabButton.module.css';

const TabButton = (props) => {

  if (props.theme === 'news') {
    return (
      <button onClick={props.onclick} className = {styles.button}>
        {!props.newsIsFocused ? 'more' : 'less'}
        {!props.newsIsFocused ? <Icon className = {styles.icon} size={20} icon={arrowMaximise}/> :  <Icon className = {styles.icon} size={20} icon={arrowMinimise}/>}
      </button>
    )
  }
  if (props.theme === 'currency') {
    return (
      <button onClick={props.onclick} className = {styles.buttonLight}>
        convert
        <Icon className = {styles.iconLight} size={20} icon={keyboard} />
      </button>
    )
  }
  if (props.theme === 'crypto')
    return (
      <button className = {styles.buttonLight}>
        sort
        <Icon className = {styles.iconLight} size={20} icon={arrowUnsorted} />
      </button>
    )
}

export default TabButton;
