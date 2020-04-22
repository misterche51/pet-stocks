import React from 'react';
import Tab from './Tab';
import TabHeader from "./TabHeader";
import Spinner from './Spinner';
import TabRefreshButton from "./TabRefreshButton";
import { connect } from 'react-redux';
import { cryptoFetchData } from '../actions/cryptoActions';
class TabCrypto extends Tab {
  componentDidMount() {
    // this.props.fetchData('https://fmpcloud.io/api/v3/quotes/crypto?apikey=5d203bc4e96ca9a944e8538054795ecc');
  }

  render() {
      if (this.props.cryptoIsLoading) {
        return (
          <li className = "tabs__item">
            <TabHeader theme = {this.props.theme} title={this.props.title}/>
            <Spinner/>
          </li>
        )
      }
      return (
        <li className = "tabs__item">
          <TabHeader theme = {this.props.theme} title={this.props.title}/>
          <div className = "tabs__content">
            <ul className="tabs__currency">
              {(this.props.cryptoData.filter(
                (item) => item.marketCap >= 1000000000
                ).map((item) => {
                return (
                  <li key={item.symbol} className="tabs__currency-item">
                    <p className = "tabs__currency-symbol">{item.symbol}</p>
                    <p className = "tabs__currency-price">{(item.price).toFixed(3)}</p>
                    {item.changesPercentage > 0 ?
                    <p className = "tabs__currency-change tabs__currency-change--growth">+{item.changesPercentage}%</p>
                    :<p className = "tabs__currency-change tabs__currency-change--fall">{item.changesPercentage}%</p>
                  }
                  </li>
                )
              }
              ))}
            </ul>
          </div>
          <TabRefreshButton/>
        </li>
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

