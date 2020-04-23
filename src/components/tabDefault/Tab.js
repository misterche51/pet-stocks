import { Component } from 'react';
import styles from "./tabDefault.module.css";

class Tab extends Component {
  constructor (props) {
    super(props);
    this.state = {
      contentLoaded: false,
    };
  }
}

export default Tab;
