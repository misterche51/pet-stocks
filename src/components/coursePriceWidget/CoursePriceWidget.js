import React from 'react';
import styles from './coursePriceWidget.module.css'

const CoursePriceWidget = (props) => {
  return (
    <p className = {styles.price}>{props.value}</p>
  );
}

export default CoursePriceWidget;
