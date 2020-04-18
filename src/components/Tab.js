import React, { Component } from 'react';
import Spinner from './Spinner';

class Tab extends Component {
  constructor (props) {
    super(props);
    this.state = {
      contentLoaded: false,
      content: [],
    };
    this.loadData = this.loadData.bind(this);
  }

  componentDidMount() {
    this.loadData()
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
          <a className = "tabs__link">more</a>
        </span>
        <div className = "tabs__content">
          {(this.props.theme === "news") &&
          <ul className = "tabs__news">
          {(this.state.content.map((item) => {
            return (<li key = {item.url} className = "tabs__news-item">
              <p className = "tabs__news-title">{item.title}</p>
              <p className = "tabs__news-data">{item.publishedAt}</p>
            </li>)
          }))}


            </ul>

          }
        </div>
      </li>
    );
  }
}

export default Tab;
