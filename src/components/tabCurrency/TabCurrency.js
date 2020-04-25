import React, {Component} from 'react';
import TabRefreshButton from "../refreshButton/TabRefreshButton";
import { openModal } from '../../actions/modalActions';
import { connect } from 'react-redux';
import { currencyFetchData } from '../../actions/currencyActions';
import TabDefault from "../tabDefault/TabDefault";
import QuotesWidget from '../quotesWidget/QuotesWidget';
import styles from "./tabCurrency.module.css";



class TabCurrency extends Component {
  componentDidMount() {
    this.props.fetchData('https://fmpcloud.io/api/v3/fx?apikey=5d203bc4e96ca9a944e8538054795ecc');
  }

  render() {
    return (
    <TabDefault style = {styles.box} dataIsLoading = {this.props.currencyIsLoading} theme = {this.props.theme} title = {this.props.title} onclick={this.props.openConvertModal}>
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
    </TabDefault>
    )
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
