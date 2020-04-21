import React, { Component } from 'react';
import Converter from "./Converter";
import { connect } from 'react-redux';
import { closeModal } from '../actions/modalActions';
import { Icon } from 'react-icons-kit';
import {ic_clear} from 'react-icons-kit/md/ic_clear';

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
        <div className = "overlay" onClick={this.props.closeModalHandler}></div>
        <div className = "modal">
          <Converter/>
          <button type="button" className = "modal__close-button" onClick={this.props.closeModalHandler}>
            <Icon className = "modal__close-button-icon" size={40} icon={ic_clear} />
          </button>
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
