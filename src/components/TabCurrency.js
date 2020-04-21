import React from 'react';
import Tab from './Tab';
import TabHeader from "./TabHeader";
import Spinner from './Spinner';
import TabRefreshButton from "./TabRefreshButton";



class TabCurrency extends Tab {
  constructor (props) {
    super(props);
    this.state = {
      content: [],
    };
    this.loadRate = this.loadRate.bind(this);
    this.refreshRate = this.refreshRate.bind(this);
  }

  componentDidMount() {
    this.loadRate();
  }

  loadRate() {
    const url = "https://fmpcloud.io/api/v3/fx?apikey=5d203bc4e96ca9a944e8538054795ecc"
    const req = new Request(url);

    fetch(req)
      .then(res => res.json())
      .then(data => {
        this.setState(()=> ({
          rate: data,
          contentLoaded: true,
        }))
      })
  }

  refreshRate() {
    this.loadRate();
  }

  render() {
    if (!this.state.contentLoaded) {
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
            {(this.state.rate.filter((item) => (item.ticker).startsWith('USD')).map((item) => {
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

export default TabCurrency;
