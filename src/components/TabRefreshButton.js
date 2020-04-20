import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import {loop2} from 'react-icons-kit/icomoon/loop2';



class TabRefreshButton extends Component {

  render() {
    return (
      <button  className="tabs__currency-button">
        <Icon className = "tabs__currency-button-icon" size={20} icon={loop2} />
      </button>
    );
  }
}

export default TabRefreshButton;
