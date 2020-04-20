import React from 'react';
import Tab from './Tab';
import TabHeader from "./TabHeader";
import Spinner from './Spinner';

class TabCrypto extends Tab {
  constructor (props) {
    super(props);
    this.state = {
      cryptoPrices: [],
    };
    this.loadPrices = this.loadPrices.bind(this);
  }


  componentDidMount() {
    this.loadPrices();
  }

  loadPrices() {
    const url = 'https://fmpcloud.io/api/v3/quotes/crypto?apikey=5391e2dd11e5f1e4fac49bdfa07f154a';
    const req = new Request(url);

    fetch(req)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState(()=> ({
          cryptoPrices: data,
          contentLoaded: true,
        }))
      })
    }

  render() {
      if (!this.state.contentLoaded) {
        return (
          <li className = "tabs__item">
            <Spinner/>
          </li>
        )
      }
      return (
        <li className = "tabs__item">
          <TabHeader theme = {this.props.theme} title={this.props.title}/>
          <div className = "tabs__content">
            <ul className="tabs__currency">
              {(this.state.cryptoPrices.filter(
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
            {/* <button className="tabs__currency-button">
              <Icon className = "tabs__currency-button-icon" size={20} icon={loop2} />
            </button> */}
          </div>
        </li>
      );
  }
}

export default TabCrypto;
