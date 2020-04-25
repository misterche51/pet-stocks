import React, {Component} from 'react';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import './App.scss';

import Modal from './components/modal/Modal';
import { connect } from 'react-redux';



class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <Main/>
        {this.props.isModalOpen && <Modal/>}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      isModalOpen: state.modal.isModalOpen
  };
};



export default connect(mapStateToProps)(App);
