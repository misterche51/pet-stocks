import React from 'react';
import styles from "./courseSymbolWidget.module.css";

const CourseSymbolWidget = (props) => {
  return (
    <p className = {styles.symbol}>{props.symbol}</p>
  );
}

export default CourseSymbolWidget;
