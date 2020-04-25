import React, { Component } from 'react';
import TabHeader from "../tabHeader/TabHeader";
import Spinner from '../spinner/Spinner';
import { connect } from 'react-redux';
import { newsFetchData, newsIsFocused } from '../../actions/newsActions';
import styles from "./tabNews.module.css";


class TabNews extends Component {
  constructor(props){
    super(props);
    this.focusButtonClickHandler = this.focusButtonClickHandler.bind(this);
  }

  focusButtonClickHandler(e) {
    e.preventDefault();
    this.props.newsIsFocused();
  }

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
    return `${(date.getDate())} ${(calendar[date.getMonth() + 1])} at ${date.getHours()}:${date.getMinutes()}`;
  }

  render() {
    const items = [].concat(this.props.news);

    if (this.props.newsIsLoading) {
      return (
        <li className = {styles.box}>
          <TabHeader theme = {this.props.theme} title={this.props.title}/>
          <Spinner/>
        </li>
      )
    }
    return (
      <li className = {styles.box}>
        <TabHeader theme = {this.props.theme} title={this.props.title} onclick={this.props.focusButtonClickHandler} newsIsFocused={this.props.newsIsFocused} />
        <ul className = {styles.list}>
            {!this.props.newsIsFocused ? ((items.splice(0,5).map((item) => {
              return (<li key = {item.url} className = {styles.item}>
                <p className = {styles.title}>{item.title}</p>
                <p className = {styles.date}>{this.convertDate(item.publishedAt)}</p>
              </li>)
            }))):
            ((this.props.news.map((item) => {
              return (<li key = {item.url} className = {styles.item}>
                <p className = {styles.title}>{item.title}</p>
                <p className = {styles.description}>{item.description}</p>
                <p className = {styles.date}>{this.convertDate(item.publishedAt)}</p>
              </li>)
            })))
            }
          </ul>
      </li>
    );
  }
}

function mapStateToProps (state) {
  return {
    newsIsLoading: state.news.newsIsLoading,
    newsHasErrored: state.news.newsHasErrored,
    news: state.news.news,
    newsIsFocused: state.news.newsIsFocused,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url) => dispatch(newsFetchData(url)),
      focusButtonClickHandler: () => dispatch(newsIsFocused()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabNews);
