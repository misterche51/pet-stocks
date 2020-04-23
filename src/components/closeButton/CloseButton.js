import React from 'react';
import { Icon } from 'react-icons-kit';
import {ic_clear} from 'react-icons-kit/md/ic_clear';
import styles from './closeButton.module.css';


const CloseButton = (props) => {
  return (
    <button type="button" className = {styles.closeButton} onClick={props.onclick}>
      <Icon className = {styles.closeIcon} size={40} icon={ic_clear} />
    </button>
  );
}

export default CloseButton;
