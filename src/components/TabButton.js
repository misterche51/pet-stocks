import React from 'react';
import { Icon } from 'react-icons-kit';
import {arrowMaximise} from 'react-icons-kit/typicons/arrowMaximise';
import {keyboard} from 'react-icons-kit/icomoon/keyboard';
import {arrowUnsorted} from 'react-icons-kit/typicons/arrowUnsorted';
import {arrowMinimise} from 'react-icons-kit/typicons/arrowMinimise'

const TabButton = (props) => {

  if (props.theme === 'news') {
    return (
      <button onClick={props.onclick} className = "tabs__button">
        {!props.newsIsFocused ? 'more' : 'less'}
        {!props.newsIsFocused ? <Icon className = "tabs__button-icon" size={20} icon={arrowMaximise}/> :  <Icon className = "tabs__button-icon" size={20} icon={arrowMinimise}/>}
      </button>
    )
  }
  if (props.theme === 'currency') {
    return (
      <button onClick={props.onclick} className = "tabs__button">
        convert
        <Icon className = "tabs__button-icon tabs__button-icon--light" size={20} icon={keyboard} />
      </button>
    )
  }
  if (props.theme === 'crypto')
    return (
      <button className = "tabs__button">
        sort
        <Icon className = "tabs__button-icon tabs__button-icon--light" size={20} icon={arrowUnsorted} />
      </button>
    )
    // return (
    //   <button className = "tabs__button">
    //     sort
    //     <Icon className = "tabs__button-icon tabs__button-icon--light" size={20} icon={arrowUnsorted} />
    //   </button>
    // )
}

export default TabButton;
