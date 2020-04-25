import React, { Component } from 'react';
import TabDefault from "../tabDefault/TabDefault";
import QuotesWidget from '../quotesWidget/QuotesWidget';
import TabRefreshButton from "../refreshButton/TabRefreshButton";
import { connect } from 'react-redux';
import { cryptoFetchData } from '../../actions/cryptoActions';


import styles from "./tabCrypto.module.css";

class TabCrypto extends Component {
  componentDidMount() {
    this.props.fetchData('https://fmpcloud.io/api/v3/quotes/crypto?apikey=5d203bc4e96ca9a944e8538054795ecc');
  }

  render() {
      return (
        <TabDefault style = {styles.box} dataIsLoading = {this.props.cryptoIsLoading} theme = {this.props.theme} title = {this.props.title}>
          <ul className = {styles.list}>
              {(this.props.cryptoData.filter(
                (item) => item.marketCap >= 1000000000
                ).map((item) => {
                return (
                  <QuotesWidget
                    key = {item.symbol}
                    symbol = {item.symbol}
                    value = {(item.price).toFixed(3)}
                    change = {item.changesPercentage}
                    postfix = {'%'}/>
                )
              }
              ))}
            </ul>
          <TabRefreshButton/>
        </TabDefault>
      );
  }
}


function mapStateToProps (state) {
  return {
    cryptoIsLoading: state.crypto.cryptoIsLoading,
    cryptoHasErrored: state.crypto.cryptoHasErrored,
    cryptoData: state.crypto.cryptoData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url) => dispatch(cryptoFetchData(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabCrypto);

