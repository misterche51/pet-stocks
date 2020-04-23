import React from 'react';
import { Icon } from 'react-icons-kit';
import {loop2} from 'react-icons-kit/icomoon/loop2';
import styles from './refreshButton.module.css'



const TabRefreshButton = (props) =>  {
  return (
    <button onClick={props.onclick} className={styles.refreshButton}>
      <Icon className = {styles.refreshIcon} size={20} icon={loop2} />
    </button>
  );
}


export default TabRefreshButton;
