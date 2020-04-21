import React from 'react';
import Tab from './Tab';
import TabHeader from "./TabHeader";
import Spinner from './Spinner';
import TabRefreshButton from "./TabRefreshButton";
import { openModal } from '../actions/modalActions';
import { connect } from 'react-redux';
import { currencyFetchData } from '../actions/currencyActions';


class TabCurrency extends Tab {
  componentDidMount() {
    this.props.fetchData('https://fmpcloud.io/api/v3/fx?apikey=5d203bc4e96ca9a944e8538054795ecc');
  }

  render() {
    if (this.props.currencyIsLoading) {
      return (
        <li className = "tabs__item">
          <TabHeader theme = {this.props.theme} title={this.props.title} />
          <Spinner/>
        </li>
      )
    }
    return (
      <li className = "tabs__item">
        <TabHeader theme = {this.props.theme} title={this.props.title} onclick={this.props.openConvertModal}/>
        <div className = "tabs__content">
          <ul className="tabs__currency">
            {(this.props.currencyData.filter((item) => (item.ticker).startsWith('USD')).map((item) => {
              return (
                <li key={item.changes} className="tabs__currency-item">
                  <p className = "tabs__currency-symbol">{item.ticker}</p>
                  <p className = "tabs__currency-price">{item.bid}</p>
                  {item.changes > 0?
                  <p className = "tabs__currency-change tabs__currency-change--growth">+{(item.changes).toFixed(3)}</p>
                  :<p className = "tabs__currency-change tabs__currency-change--fall">{item.changes.toFixed(3)}</p>
                }
                </li>
              )
            }))}
          </ul>
          <TabRefreshButton/>
        </div>
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
