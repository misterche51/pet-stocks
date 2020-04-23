import React from 'react';
import Tab from '../tabDefault/Tab';
import TabHeader from "../tabHeader/TabHeader";
import CourseChangeWidget from "../courseChangeWidget/CourseChangeWidget";
import CoursePriceWidget from "../coursePriceWidget/CoursePriceWidget";
import CourseSymbolWidget from "../courseSymbolWidget/CourseSymbolWidget";
import Spinner from '../spinner/Spinner';
import TabRefreshButton from "../refreshButton/TabRefreshButton";
import { connect } from 'react-redux';
import { cryptoFetchData } from '../../actions/cryptoActions';
import styles from "./tabCrypto.module.css";

class TabCrypto extends Tab {
  componentDidMount() {
    // this.props.fetchData('https://fmpcloud.io/api/v3/quotes/crypto?apikey=5d203bc4e96ca9a944e8538054795ecc');
  }

  render() {
      if (this.props.cryptoIsLoading) {
        return (
          <li className = {styles.box}>
            <TabHeader theme = {this.props.theme} title={this.props.title}/>
            <Spinner/>
          </li>
        )
      }
      return (
        <li className = {styles.box}>
          <TabHeader theme = {this.props.theme} title={this.props.title}/>
          <div className = "tabs__content">
            <ul className="tabs__currency">
              {(this.props.cryptoData.filter(
                (item) => item.marketCap >= 1000000000
                ).map((item) => {
                return (
                  <li key={item.symbol} className="tabs__currency-item">
                    <CourseSymbolWidget symbol = {item.symbol}/>
                    <CoursePriceWidget value = {(item.price).toFixed(3)}/>
                    {item.changesPercentage > 0 ?
                     <CourseChangeWidget growth = {true} value={`+${item.changesPercentage}%`}/>
                    :<CourseChangeWidget growth = {false} value={`${item.changesPercentage}%`}/>
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

