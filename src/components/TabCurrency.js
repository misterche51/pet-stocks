import React from 'react';
import Tab from './Tab';
import TabHeader from "./TabHeader";
import Spinner from './Spinner';
import { Icon } from 'react-icons-kit';
import {loop2} from 'react-icons-kit/icomoon/loop2';


class TabCurrency extends Tab {
  constructor (props) {
    super(props);
    this.state = {
      content: [],
    };
    this.loadRate = this.loadRate.bind(this);
  }

  componentDidMount() {
    this.loadRate();
  }

  loadRate() {
    // const url = 'https://fcsapi.com/api-v2/forex/latest?symbol=EUR/USD,USD/JPY,GBP/CHF,AUD/USD,USD/CNH,USD/THB&access_key=JoCqImY8mbipESNQxga0w24RMyUEQpCg9Y15a6DFzsIuK5LH';
    const url = "https://fmpcloud.io/api/v3/fx?apikey=5391e2dd11e5f1e4fac49bdfa07f154a"
    const req = new Request(url);

    fetch(req)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState(()=> ({
          rate: data,
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
          <button className="tabs__currency-button">
            <Icon className = "tabs__currency-button-icon" size={20} icon={loop2} />
          </button>
        </div>
      </li>
    );
  }
}

export default TabCurrency;
