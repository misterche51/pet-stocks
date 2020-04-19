import React, { Component } from 'react';
import Spinner from './Spinner';
import TabButton from "./TabButton";

class Tab extends Component {
  constructor (props) {
    super(props);
    this.state = {
      contentLoaded: false,
      content: [],
      rate: [],
    };
    this.loadData = this.loadData.bind(this);
    this.loadRate = this.loadRate.bind(this);
  }

  componentDidMount() {
    this.loadData();
    this.loadRate();

  }

  convertDate(string) {
    const calendar = {
      '1': 'january',
      '2': 'february',
      '3': 'march',
      '4': 'april',
      '5': 'may',
      '6': 'june',
      '7': 'july',
      '8': 'august',
      '9': 'septemer',
      '10': 'october',
      '11': 'november',
      '12': 'december',
    };
    const date = new Date(string);
    return `${(date.getDate())} ${(calendar[date.getMonth() + 1])} ${date.getFullYear()}`;
  }

  loadData() {
    const url = 'http://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=7ab44deebef847778ccdfa83fad482a3';
    const req = new Request(url);

    fetch(req)
      .then(res => res.json())
      .then(articles => {
        const titles = articles['articles'];
        this.setState(() => ({
          content: titles,
          contentLoaded: true,
        }));
      })
  }

  loadRate() {
    const url = 'https://fcsapi.com/api-v2/forex/latest?symbol=EUR/USD,USD/JPY,GBP/CHF&access_key=JoCqImY8mbipESNQxga0w24RMyUEQpCg9Y15a6DFzsIuK5LH';
    const req = new Request(url);

    fetch(req)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState(()=> ({
          rate: data.response,
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
        <span className = "tabs__header">
          <h2 className = "tabs__title">{this.props.title}</h2>
          <TabButton theme = {this.props.theme}/>
        </span>
        <div className = "tabs__content">
          {(this.props.theme === "news") &&
          <ul className = "tabs__news">
            {(this.state.content.splice(0, 6).map((item) => {
              return (<li key = {item.url} className = "tabs__news-item">
                <p className = "tabs__news-title">{item.title}</p>
                <p className = "tabs__news-date">{this.convertDate(item.publishedAt)}</p>
              </li>)
            }))}
          </ul>
          }
          {(this.props.theme === "currency") &&
            <ul className="tabs__currency">
              {console.log(this.state.rate)}
              {(this.state.rate.map((item) => {
                return (
                  <li key={item.symbol} className="tabs__currency-item">
                    <p className = "tabs__currency-symbol">{item.symbol}</p>
                    <p className = "tabs__currency-price">{item.price}</p>
                    {item.chg_per[0] === '+' ?
                    <p className = "tabs__currency-change tabs__currency-change--growth">{item.chg_per}</p>
                    :<p className = "tabs__currency-change tabs__currency-change--fall">{item.chg_per}</p>
                  }
                  </li>
                )
              }))}
            </ul>
          }
        </div>
      </li>
    );
  }
}

export default Tab;
