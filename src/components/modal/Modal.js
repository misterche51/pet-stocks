import React, { Component } from 'react';
import Converter from '../converter/Converter';
import CloseButton from '../closeButton/CloseButton';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modalActions';
// import { Icon } from 'react-icons-kit';
// import {ic_clear} from 'react-icons-kit/md/ic_clear';

import styles from './modal.module.css';

class Modal extends Component {
  constructor(props){
    super(props);
    this.escapeKeyDownHandler = this.escapeKeyDownHandler.bind(this);
  }

  escapeKeyDownHandler(e){
      e.keyCode===27 && this.props.closeModalHandler();
  }

  componentDidMount(){
      document.addEventListener("keydown", this.escapeKeyDownHandler);
  }

  componentWillUnmount(){
      document.removeEventListener("keydown", this.escapeKeyDownHandler);
}
  render() {
    return (
      <>
        <div className = {styles.overlay} onClick={this.props.closeModalHandler}></div>
        <div className = {styles.window}>
          <Converter/>
          <CloseButton onclick = {this.props.closeModalHandler}/>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      isModalOpen: state.modal.isModalOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      closeModalHandler: () => dispatch(closeModal()),
  };
};

export default connect( mapStateToProps, mapDispatchToProps)(Modal);
