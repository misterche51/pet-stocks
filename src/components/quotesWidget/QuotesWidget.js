import React from 'react';
import CourseChangeWidget from "../courseChangeWidget/CourseChangeWidget";
import CoursePriceWidget from "../coursePriceWidget/CoursePriceWidget";
import CourseSymbolWidget from "../courseSymbolWidget/CourseSymbolWidget";
import styles from './quotesWidget.module.css';

const QuotesWidget = (props) => {
  return (
    <li className={styles.widget}>
      <CourseSymbolWidget symbol = {props.symbol}/>
      <CoursePriceWidget value = {props.value}/>
      {props.change > 0?
        <CourseChangeWidget growth = {true} value={`${+(props.change).toFixed(3)}${props.postfix}`}/>
        : <CourseChangeWidget growth = {false} value={`${props.change.toFixed(3)}${props.postfix}`}/>
    }
    </li>
  );
}

export default QuotesWidget;
