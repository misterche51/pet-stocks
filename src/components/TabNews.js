import React from 'react';
import Tab from './Tab';
import TabHeader from "./TabHeader";
import Spinner from './Spinner';
import { connect } from 'react-redux';

import { newsFetchData } from '../actions/newsActions';


class TabNews extends Tab {

  componentDidMount() {
    this.props.fetchData('http://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=7ab44deebef847778ccdfa83fad482a3');
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

  render() {
    if (this.props.newsIsLoading) {
      return (
        <li className = "tabs__item">
          <Spinner/>
        </li>
      )
    }
    return (
      <li className = {`tabs__item`}>
        <TabHeader theme = {this.props.theme} title={this.props.title}/>
        <div className = "tabs__content">
          <ul className = "tabs__news">
            {(this.props.news.splice(0, 6).map((item) => {
              return (<li key = {item.url} className = "tabs__news-item">
                <p className = "tabs__news-title">{item.title}</p>
                <p className = "tabs__news-date">{this.convertDate(item.publishedAt)}</p>
              </li>)
            }))}
          </ul>
        </div>
      </li>
    );
  }
}

function mapStateToProps (state) {
  return {
    newsIsLoading: state.news.newsIsLoading,
    newsHasErrored: state.news.newsHasErrored,
    news: state.news.news,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url) => dispatch(newsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabNews);
