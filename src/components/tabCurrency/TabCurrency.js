import React, {Component} from 'react';
import TabHeader from "../tabHeader/TabHeader";
import Spinner from '../spinner/Spinner';
import TabRefreshButton from "../refreshButton/TabRefreshButton";
// import CourseChangeWidget from "../courseChangeWidget/CourseChangeWidget";
// import CoursePriceWidget from "../coursePriceWidget/CoursePriceWidget";
// import CourseSymbolWidget from "../courseSymbolWidget/CourseSymbolWidget";
import { openModal } from '../../actions/modalActions';
import { connect } from 'react-redux';
import { currencyFetchData } from '../../actions/currencyActions';

import QuotesWidget from '../quotesWidget/QuotesWidget';
import styles from "./tabCurrency.module.css";



class TabCurrency extends Component {
  componentDidMount() {
    this.props.fetchData('https://fmpcloud.io/api/v3/fx?apikey=5d203bc4e96ca9a944e8538054795ecc');
  }

  render() {
    if (this.props.currencyIsLoading) {
      return (
        <li className = {styles.box}>
          <TabHeader theme = {this.props.theme} title={this.props.title} />
          <Spinner/>
        </li>
      )
    }
    return (
      <li className = {styles.box}>
        <TabHeader theme = {this.props.theme} title={this.props.title} onclick={this.props.openConvertModal}/>
        <ul className = {styles.list}>
          {(this.props.currencyData.filter((item) => (item.ticker).startsWith('USD')).map((item) => {
            return (
              <QuotesWidget
                key = {item.changes}
                symbol = {item.ticker}
                value = {item.bid}
                change = {item.changes}
                postfix = {''}/>
            )
          }))}
        </ul>
        <TabRefreshButton/>
      </li>
    );
  }
}

function mapStateToProps (state) {
  return {
    currencyIsLoading: state.currency.currencyIsLoading,
    currencyHasErrored: state.currency.currencyHasErrored,
    currencyData: state.currency.currencyData,
    isModalOpen: state.modal.isModalOpen,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url) => dispatch(currencyFetchData(url)),
      openConvertModal: () => dispatch(openModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabCurrency);
